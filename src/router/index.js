import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/shop/Shop.vue'),
  },
  {
    path: '/shop/how-to-get-points',
    name: 'HowToPts',
    component: () => import('../views/shop/HowToPts.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'flex';
  }
  next();
});

router.afterEach(() => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

export default router;
