Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      get '/portfolio', :to => 'portfolio_items#index'
      post '/portfolio', :to => 'portfolio_items#create'
    end
    resource :session, only: [:create, :destroy]
    resources :follows, only: [:create, :index, :destroy, :update, :show]
    resources :shoes, only: [:show, :index] do 
    #   resources :follows, only: [:create]
      get '/orders', :to => 'orders#shoe_index'
      get '/sales', :to => 'sales#shoe_index'
      get '/sales/last', :to => 'sales#shoe_last_sale'
      get '/sales/:size', :to => 'sales#shoe_size_index'
    end
    resources :orders, only: [:create, :update]
    resources :sales, only: [:create, :update]
    delete '/portfolio/:id', :to => 'portfolio_items#destroy'
  end

  root "static_pages#root"
end
