import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
   {path: '/',name: 'Home',component:Home},
   
   {path:'/destination/:id/:slug', 
   name:'destination.show' , 
   component:()=>import('@/views/DestinationShow.vue')},
   {path:'/:pathMatch(.*)*',
  name:'NotFound',
  component:()=>import('@/views/NotFound.vue')}
  ]
})

export default router
