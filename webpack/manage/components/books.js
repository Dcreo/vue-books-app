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
      axios.get('/api/manage/books')
        .then(function(response){
          self.books = response.data;
        })
    }
  }
}

export {books}
