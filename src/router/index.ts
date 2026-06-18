import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductSeriesView from '../views/ProductSeriesView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import ApplicationScenariosView from '../views/ApplicationScenariosView.vue'
import ResourceCenterView from '../views/ResourceCenterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: ApplicationScenariosView,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourceCenterView,
    },
    {
      path: '/products/:seriesId',
      name: 'product-series',
      component: ProductSeriesView,
    },
    {
      path: '/products/:seriesId/:variantId',
      name: 'product-detail',
      component: ProductDetailView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
