import Vue from 'vue'
import VueScroller from 'vue-scroller'
import VConsole from 'vconsole'
import vuex from 'vuex'
import router from '@/router'
import Index from './haowen.vue'


const vConsole = new VConsole()
Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper)

console.log(vConsole.version)

new Vue({
    el: '#app', //根节点元素
    router, //路由信息
    // store,
    template: '<Index/>', //模版信息
    components: { Index } //组件信息
})