import {booksTemplate} from '../templates/books'

const books = {
  template: booksTemplate,
  data: function() {
    return {
      title: 'Список книг'
    }
  }
}

const newBook = {
  template: '<h1>Новая книга</h1>'
}

export {books, newBook}
