RapGenius::Application.routes.draw do

  get '/:id', to: 'annotations#show', constraints: {id: /\d+/}

  resources :songs do
    member do
      post "markdown", :to => "songs#plain_update"
    end
  end

  resources :images
  resources :artists
  resources :albums
  resources :annotations
  resources :users
  resource :session
end
