import Vue from 'vue'
import VueRouter from 'vue-router'


//We import and install the VueRouter plugin with Vue.use()
Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/Hello'
import Home from '/views/Home'


//pick the configurations from the settings folder
const router = new VueRouter({
	mode:'history',
	routes:[
	{

		//A Home component that maps to the / route
		path:'/',
		name:'home',
		component:Home
	},
	{

		//A Hello component that maps to the /hello route
		path:'/hello',
		name:'hello',
		component:Hello
	},
	],
});

const app = new Vue({
	el:'#app',

	//We make Vue aware of the App
	components: { App },

	//We inject the router constant into the new Vue application to get access to this.$router and this.$route
	router,
});