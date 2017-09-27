import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import {router, routes} from './routes/routes'

Vue.use(VueRouter)

const manageApp = new Vue({
  el: '#manage-app',
  router: router,
  data: {
    title: 'Админка'
  }
});
