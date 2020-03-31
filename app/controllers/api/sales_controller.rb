class Api::SalesController < ApplicationController
    def shoe_sales_index
        @sales = Shoe.find(params[:shoe_id]).sales
        render :index
    end

    def shoe_last_sale
        @sale = Shoe.find(params[:shoe_id]).sales.order('date desc').limit(1)[0]
        render :show
    end

    def shoe_size_index
        @sales = Shoe.find(params[:shoe_id]).sales.where("sales.size = #{params[:size]}")
        render :index
    end

    def create
        @sale = Sale.new(sale_params)

        if @sale.save
            render :show
        else
            render json: @sale.errors.full_messages, status: 401
        end
    end

    def update
        @sale = Sale.find(params[:id])

        if @sale.update(sale_params)
            render :show
        else
            render json: @sale.errors.full_messages, status: 401
        end
    end

    def show
        @sale = Sale.find(params[:id])
    end  

    private
    def sale_params
        params.require(:sale).permit(:id, :order_id, :shoe_id, :sex, :size, :date, :active, :price)
    end
end
