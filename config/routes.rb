Rails.application.routes.draw do
  namespace :manage do
    resources :books

    root 'application#index'
  end

  namespace :api do
    resources :books
  end

  root 'welcome#index'
end
