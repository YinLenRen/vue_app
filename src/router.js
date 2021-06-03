import VueRouter from 'vue-router'

import home from './components/tabbars/homeFragment.vue'
import member from './components/tabbars/memberFragment.vue'
import search from './components/tabbars/searchFragment.vue'
import shoppingcart from './components/tabbars/shoppingcartFragment.vue'
import newList from './components/news/newList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:home},
        {path:'/member', component:member},
        {path:'/search', component:search},
        {path:'/shoppingcart', component:shoppingcart},
        {path:'/home/newList', component:newList},
        {path:'/home/newList/:id', component:newsInfo, props:true},
        {path:'/home/photoList', component:photoList},
        {path:'/home/photoInfo/:id', component:photoInfo, props:true}
    ],
    linkActiveClass:'mui-active'
})

export default router;