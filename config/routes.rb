Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    root 'devise/sessions#new'
  end

  get "/faces", to: "pages#faces", as: :faces
  get "/tiles", to: "pages#tiles"
  get "/tiles/breathing", to: "pages#breathing"
  get "/tiles/exercise", to: "pages#exercise"
  get "/tiles/videos", to: "pages#videos"
  get "/tiles/chat", to: "pages#chat"
  resources :posts
  resources :goals
  resources :emotions, only: [:create]
  get "/emotion", to: "emotions#counter"
  get "/test", to: "pages#test"
  post "goals/:id/toggle", to: "goals#toggle"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
