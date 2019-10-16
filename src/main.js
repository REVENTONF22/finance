import Vue from 'vue';
import App from './App';
import router from 'router';
import store from 'store';
import 'babel-polyfill';

import components from 'components';
Vue.use(components);

new Vue({
	el: '#app',
	components: { App },
	template: '<App></App>',
	router,
	store
});