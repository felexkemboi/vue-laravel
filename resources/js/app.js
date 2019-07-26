import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import App from '../assets/js/views/App'
import Hello from '../assets/js/views/Hello'
import Home from '../assets/js/views/Home'
import UsersIndex from '../assets/js/views/UsersIndex'
import UserEdit from '../assets/js/views/UserEdit'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'user.edit',
            component:UserEdit, 
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});