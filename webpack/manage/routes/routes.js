import VueRouter from 'vue-router'
import {books} from '../components/books.js'
import {newBook} from '../components/new_book.js'

const routes = [
  { path: '/books', name: 'books', component: books },
  { path: '/books/new', name: 'newBook', component: newBook },
]

const router = new VueRouter({
  routes
});

export {router, routes}
