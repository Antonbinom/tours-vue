import Vue from 'vue'
import VueRouter from 'vue-router'
import AllToursView from '@/views/AllToursView.vue'
import SingleTourView from '@/views/SingleTourView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
			component: AllToursView
		},
		{
			name: 'tour',
			path: '/tour/:emit',
			component: SingleTourView
		}
	]
})


export default router
