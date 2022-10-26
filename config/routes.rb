Rails.application.routes.draw do
  resources :events
  resources :posts
  resources :cities
  resources :users

  post '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
  
  get '/me', to:'users#show'
  post '/signup', to: 'users#create'

end
