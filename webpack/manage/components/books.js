import {booksTemplate} from '../templates/books'
import axios from 'axios'

const books = {
  template: booksTemplate,
  data: function() {
    return {
      title: 'Список книг',
      books: {}
    }
  },
  created () {
    this.getBooks()
  },
  methods: {
    getBooks: function() {
      self = this;
      axios.get('/api/books')
        .then(function(response){
          self.books = response.data;
        })
    }
  }
}

const newBook = {
  template: '<h1>Новая книга</h1>'
}

export {books, newBook}
