import VueRouter from 'vue-router'

import home from './component/homeFragment.vue'
import member from './component/memberFragment.vue'
import search from './component/searchFragment.vue'
import shoppingcart from './component/shoppingcartFragment.vue'

var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:home},
        {path:'/member', component:member},
        {path:'/search', component:search},
        {path:'/shoppingcart', component:shoppingcart}
    ],
    linkActiveClass:'mui-active'
})

export default router;