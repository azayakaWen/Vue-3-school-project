import { createRouter, createWebHashHistory } from 'vue-router'

import ActivityView from './views/ActivityView.vue'
import JokesView from './views/JokesView.vue'
import ContactView from './views/ContactView.vue'

export default createRouter({
  history: createWebHashHistory(),
    routes: [
    {
      component: ActivityView,
      path: '/'
    },
    {
      component: JokesView,
      path: '/jokes'
    },
    {
      component: ContactView,
      path: '/contact'
    }
  ]
})
