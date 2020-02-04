import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
