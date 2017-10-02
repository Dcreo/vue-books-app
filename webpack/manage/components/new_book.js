import {newBookTemplate} from '../templates/new_book'
import axios from 'axios'
import {router} from '../routes/routes'

const newBook = {
  template: newBookTemplate,
  data: function() {
    return {
      title: 'Новая книга',
      messages: {},
      saved: false,
      book: {
        name: ''
      }
    }
  },
  methods: {
    saveBook() {
      self = this;
      axios.post('/api/manage/books', { book: this.book })
        .then(function(response){
          self.checkValidationErrors(response);
        }).catch(function(error){
          console.log('Возникли ошибки доступа к серверу');
        });
    },
    checkValidationErrors: function(response) {
      if (response.data.errors) {
        this.messages = response.data.errors;
      } else {
        this.messages = { notice: [response.data.notice] };
        this.saved = !this.saved
        setTimeout(() => {
          this.$router.push('/books')
        }, 2000);
      }
    }
  }
}

export {newBook}
