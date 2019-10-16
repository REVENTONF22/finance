import Vue from 'vue';
import App from './App';
import router from 'router';
import store from 'store';
import 'babel-polyfill';

new Vue({
	el: '#app',
	components: { App },
	template: '<App></App>',
	router,
	store
});