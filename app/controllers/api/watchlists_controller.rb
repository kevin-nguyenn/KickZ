class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.all

        render "api/watchlists/index"
    end

    def show
        @watchlist = Watchlist.find_by(id: params[:id])

        render "api/watchlists/show"
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)

        if @watchlist.save
            render "api/watchlists/create"
        else
            render json: @watchlist.errors.full_messages, status: 422
        end
    end

    def update
        @watchlist = Watchlist.find_by(id: params[:id])

        if @watchlist.update(watchlist_params)
            render "api/watchlists/show"
        else
            render json: @watchlist.errors.full_messages, status: 422
        end
    end

    def destroy
        @watchlist = Watchlist.find_by(id: params[:id])
        @watchlist.destroy
        render "api/watchlists/destroy"
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:user_id, :shoe_id)
    end
end
