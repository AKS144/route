import Vue from 'vue'
import App from './App.vue'

//*step 1
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Setting from './components/Setting.vue'
import Login from './components/Login.vue'
import User from './components/User.vue'

//step2
Vue.use(VueRouter)
const routes=[
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/setting',component:Setting},
  {path:"/Login",component:Login},
  {path:"/User/:id",component:User}
]
//step3
const router1= new VueRouter({
  routes
})
//*

Vue.config.productionTip = false

new Vue({
  router: router1,  //added
  render: h => h(App),
}).$mount('#app')
