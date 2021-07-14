import Vue from 'vue'

import Mint from 'mint-ui'
Vue.use(Mint)

//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import './filter.js'

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL:"http://www.liulongbin.top:3005/"
})
