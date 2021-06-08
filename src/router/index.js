import { createRouter, createWebHashHistory } from 'vue-router'
import login from "@/views/login";
import home from "@/views/home";


const routes = [
  {
    path:'',
    component:login

  },
  {
    path: '/home',
    component: home
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
