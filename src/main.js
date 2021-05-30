import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './filter.js'

import './globalConfig.js'


import router from './router.js'
import app from './App.vue'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'


var vm = new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})