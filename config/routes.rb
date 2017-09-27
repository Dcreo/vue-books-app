Rails.application.routes.draw do
  namespace :manage do
    resources :books

    root 'application#index'
  end

  root 'welcome#index'
end
