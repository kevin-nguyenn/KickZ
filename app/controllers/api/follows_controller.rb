class Api::FollowsController < ApplicationController
    def user_index
        @follows = @current_user.follows
        render :index
    end

    def create
        @follow = Follow.new(follow_params)
        @follow.user_id = follow_params[:user_id]
        @follow.shoe_id = follow_params[:shoe_id]

        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 401
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
    end

    private
    def follow_params
        params.require(:follow).permit(:id, :shoe_id, :user_id)
    end
end
