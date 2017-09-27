class Api::BooksController < Api::ApplicationController
  def index
    @books = Book.all

    render json: @books
  end
end
