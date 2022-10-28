Rails.application.routes.draw do
  resources :hiddens, only: [:create, :destroy]
  resources :posts
  resources :cities, only: [:index, :create]
  resources :users, only: [:index, :show, :create, :update]

  get '/posts-categories', to: 'posts#index_categories'

  post '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
  
  get '/me', to:'users#show'
  post '/signup', to: 'users#create'

  

end
