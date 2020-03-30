class Api::OrdersController < ApplicationController
    def user_index
        @orders = current_user.listed_orders.where("active = 'true'")
        render :index
    end

    def shoe_index
        @orders = Shoe.find(params[:shoe_id]).orders.where("active = 'true'")
        render :index
    end

    def create
        @order = Order.new(order_params)
        @order.buyer_id = nil
        if @order.save
            render :show
        else
            render json: @order.errors.full_messages, status: 401
        end
    end
    
    def update
        @order = Order.find(params[:id])
        if @order.update(order_params)
            render :show
        else
            render json: @order.errors.full_messages, status: 401
        end
    end

    def show
        @order = Order.find(params[:id])
    end

    def order_params
        params.require(:order).permit(:id, :shoe_id, :seller_id, :buyer_id, :price, :order_type, :active, :sold, :shipped, :size, :sex)
    end
end
