import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/main.scss'

// Import pages
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Team from './pages/Team.vue'
import Contact from './pages/Contact.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/projects', component: Projects, name: 'projects' },
  { path: '/team', component: Team, name: 'team' },
  { path: '/contact', component: Contact, name: 'contact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')