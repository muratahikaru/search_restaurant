Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "restaurants#search"
  get "/restaurants" => "restaurants#index"
  get "/restaurant" => "restaurants#show"
  get "/restaurant/not_exist" => "restaurants#error"
end
