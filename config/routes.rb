RapGenius::Application.routes.draw do

  root :to => "root#primary"

  get '/:id', to: 'annotations#show', constraints: {id: /\d+/}

  resources :songs do
    member do
      post "markdown", :to => "songs#plain_update"
    end
  end
  
  match "/auth/facebook/callback" => "sessions#facebook_create"

  resources :images
  resources :artists
  resources :albums
  resources :annotations
  resources :users
  resource :session
end
