Rails.application.routes.draw do
  resources :posts
  resources :cities, only: [:index, :create]
  resources :users, only: [:index, :show, :create]

  get '/posts-categories', to: 'posts#index_categories'

  post '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
  
  get '/me', to:'users#show'
  post '/signup', to: 'users#create'

  

end
