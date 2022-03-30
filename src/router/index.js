import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharactersView.vue'),
  },
  {
    path: '/character/:id',
    name: 'character-details',
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharacterDetails.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
