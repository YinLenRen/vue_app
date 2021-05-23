import VueRouter from 'vue-router'

import home from './component/homeFragment.vue'
import member from './component/memberFragment.vue'
import search from './component/searchFragment.vue'
import shoppingcart from './component/shoppingcartFragment.vue'
import newList from './news/newList.vue'
import newsInfo from './news/newsInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:home},
        {path:'/member', component:member},
        {path:'/search', component:search},
        {path:'/shoppingcart', component:shoppingcart},
        {path:'/home/newList', component:newList},
        {path:'/home/newList/:id', component:newsInfo, props:true}
    ],
    linkActiveClass:'mui-active'
})

export default router;