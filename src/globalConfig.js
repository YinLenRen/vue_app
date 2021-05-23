import Vue from 'vue'

import Mint from 'mint-ui'
Vue.use(Mint)

import './filter.js'

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL:"http://www.liulongbin.top:3005/"
})
