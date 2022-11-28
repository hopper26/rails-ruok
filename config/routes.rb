Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    root 'devise/sessions#new'
  end

  get "/face", to: "pages#face", as: :face
  get "/tiles", to: "pages#tiles"
  get "/tiles/breathing", to: "pages#breathing"
  get "/tiles/exercise", to: "pages#exercise"
  get "/tiles/contacts", to: "pages#contacts"
  get "/tiles/chat", to: "pages#chat"
  resources :posts
  resources :goals
  resources :emotions, only: [:create, :index]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
