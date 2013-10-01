RapGenius::Application.routes.draw do

  root :to => "root#primary"

  get '/:id', to: 'annotations#show', constraints: {id: /\d+/}

  resources :songs
  
  match "/auth/facebook/callback" => "sessions#facebook_create"
  
  get "/search", :to => "search#search"
  
  resources :artists
  resources :albums
  resources :annotations
  resources :users
  resource :session
end
