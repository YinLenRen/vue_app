import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Mint from 'mint-ui'
Vue.use(Mint)

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL:"http://www.liulongbin.top:3005/"
})

import router from './router.js'
import app from './App.vue'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})