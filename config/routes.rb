Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :retirees, param: :slug
      resources :configurations, only: [:create, :destroy]
      resources :choices, only: [:create, :destroy]
      resources :options, only: [:create, :destroy]

    end
  end

  get '*path', to: 'pages#index', via: :all
end
