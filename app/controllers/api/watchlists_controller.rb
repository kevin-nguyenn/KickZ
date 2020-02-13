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
        
    end
end
