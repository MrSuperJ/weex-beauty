/*global Vue*/
import Router from 'vue-router'
// import hrd from '@/view/hrd';

import home from '@/view/home';
import heart from '@/view/heart';
import my from '@/view/my';
import collect from '@/view/collect';

import show from '@/view/Show';

Vue.use(Router)

module.exports = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        }, {
            path: '/home',
            name: 'home',
            component: home
        }, {
            path: '/heart',
            name: 'heart',
            component: heart
        }, {
            path: '/my',
            name: 'my',
            component: my
        }, {
            path: '/collect',
            name: 'collect',
            component: collect
        }, {
            path: '/show/:index',
            name: 'show',
            component: show
        }

    ]
})