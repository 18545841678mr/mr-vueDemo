import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/haowen/home/index'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})