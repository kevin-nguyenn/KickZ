Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :watchlists, only: [:index, :destroy, :update, :show]
    resources :shoes, only: [:show, :index] do 
      resources :watchlists, only: [:create]
    end
  end

  root "static_pages#root"
end
