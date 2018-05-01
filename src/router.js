/*global Vue*/
import Router from 'vue-router'
// import hrd from '@/view/hrd';
import show from '@/view/Show';
import home from '@/view/home';

Vue.use(Router)

module.exports = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/show/:index',
            name: 'show',
            component: show
        },


    ]
})