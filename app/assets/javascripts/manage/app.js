import header from 'header';

const books = {
  data: function() {
    return {
      title: 'Список книг'
    }
  },
  template: '<h1>{{ title }}</h1>'
};

const newBook = {
  data: function() {
    return {
      title: 'Добавление книги'
    }
  },
  template: '<h1>{{ title }}</h1>'
};

const routes = [
  { path: '/books', name: 'books', component: books },
  { path: '/books/new', name: 'new_book', component: newBook }
];

const router = new VueRouter({
  routes
});

var manageApp = new Vue({
  el: '#manageApp',
  router: router
});
