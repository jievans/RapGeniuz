RapGenius::Application.routes.draw do
  resources :songs do
    member do
      post "markdown", :to => "songs#plain_update"
    end
  end
  resources :annotations
  resources :users
  resource :session
end
