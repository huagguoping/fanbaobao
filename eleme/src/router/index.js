import Vue from 'vue'
import Router from 'vue-router'
//导入组件
import Goods from '@/components/goods'
import Ratings from '@/components/ratings'
import Seller from '@/components/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass:"cur",
  routes: [
    {
      path:"/",
      component:Goods,
      name:'goods'
    },
    {
      path:"/goods",
      component:Goods,
      name:'goods'
    },
    {
      path:"/ratings",
      component:Ratings,
      name:'ratings'
    },
    {
      path:"/seller",
      component:Seller,
      name:'seller'
    },
  ]
})
