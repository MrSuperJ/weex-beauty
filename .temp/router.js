import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
// import hrd from '@/view/hrd';
import show from '@/view/Show';
import home from '@/view/home';

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/dsf',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/show/:index',
      name: 'show',
      component: show
    },


  ]
})
