import Vue from 'vue'

// 引入滴滴移动端插件和css
import mandmobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

// 引入axios
import axios from 'axios'


import App from './App.vue'
// 引入路由插件
import VueRouter from 'vue-router'

// 使用插件
Vue.use(mandmobile)
Vue.use(VueRouter)



// 引入组件
import Index from './components/Index.vue'
import Category from './components/Category.vue'
import Tags from './components/Tags.vue'
import About from './components/About.vue'
import Post from './components/Post.vue'
import CategoryList from './components/CategoryList.vue'
import TagList from './components/TagList.vue'

// 定义全局变量 API请求地址
Vue.prototype.$API_HOST='https://loachblog.com/api/'

// 组件绑定路由

const routes=[
  {path:'/',redirect:'index'},
  {path:'/index',component:Index},
  {path:'/category',component:Category},
  {path:'/tags',component:Tags},
  {path:'/about',component:About},
  {path:'/post',component:Post},
  {path:'/categorylist',component:CategoryList},
  {path:'/taglist',component:TagList},
  {path:'*',redirect:'/'}
]



Vue.config.productionTip = false
Vue.prototype.$axios = axios




// 实例化路由
const router = new VueRouter({
  routes //相当于routes:routes
})

new Vue({
  render: h => h(App),
  router,  //挂载路由
}).$mount('#app')
