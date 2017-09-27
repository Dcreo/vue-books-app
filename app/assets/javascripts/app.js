var app = new Vue({
  el: '#app',
  data: {
    message: 'Тестовое сообщение',
    name: '',
    surname: ''
  },
  computed: {
    fullname: function() {
      return this.name + ' ' + this.surname;
    },
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    }
  }
});
