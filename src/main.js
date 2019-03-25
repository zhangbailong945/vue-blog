import Vue from 'vue'

// 引入滴滴移动端插件和css
import mandmobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

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

// 组件绑定路由

const routes=[
  {path:'/index',component:Index},
  {path:'/category',component:Category},
  {path:'/tags',component:Tags},
  {path:'/about',component:About}
]



Vue.config.productionTip = false




// 实例化路由
const router = new VueRouter({
  routes //相当于routes:routes
})

new Vue({
  render: h => h(App),
  router,  //挂载路由
}).$mount('#app')