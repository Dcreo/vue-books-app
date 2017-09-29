Rails.application.routes.draw do
  namespace :manage do
    resources :books

    root 'application#index'
  end

  namespace :api do
    namespace :manage do
      resources :books
    end
  end

  root 'welcome#index'
end
