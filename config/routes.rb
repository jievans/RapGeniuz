RapGenius::Application.routes.draw do
  resources :songs
  resources :annotations
  resources :users
  resource :session
end
