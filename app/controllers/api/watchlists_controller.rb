class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.all

        render :index
    end

    def show
        @watchlist = Watchlist.find_by(id: params[:id])

        render :show
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)

        if @watchlist.save
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 401
        end
    end

    def update
        @watchlist = Watchlist.find_by(id: params[:id])

        if @watchlist.update(watchlist_params)
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 401
        end
    end

    def destroy
        @watchlist = Watchlist.find_by(id: params[:id])
        @watchlist.destroy
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:id, :user_id, :shoe_id)
    end
end
