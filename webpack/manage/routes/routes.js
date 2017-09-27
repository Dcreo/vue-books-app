import VueRouter from 'vue-router'
import {books, newBook} from '../components/books.js'

const routes = [
  { path: '/books', name: 'books', component: books },
  { path: '/books/new', name: 'newBook', component: newBook },
]

const router = new VueRouter({
  routes
});

export {router, routes}
