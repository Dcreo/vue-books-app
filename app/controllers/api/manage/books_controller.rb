class Api::Manage::BooksController < Api::Manage::ApplicationController
  def index
    @books = Book.all
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render json: { notice: 'Книга добавлена!' }
    else
      render json: { errors: @book.errors }
    end
  end

  private

  def book_params
    params.require(:book).permit(:name)
  end
end
