import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/haowen/home/index'
import Article from '@/pages/article'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/article/:id',
            name: 'Article',
            component: Article
        }
    ]
})