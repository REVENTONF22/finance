import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import finance from './modules/finance';


var router = new VueRouter({
	routes: [
		...finance
	]
});

export default router;