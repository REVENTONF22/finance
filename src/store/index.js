import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

import finance from './modules/finance';

var store = new Vuex.Store({
	state: {
		title: 'VUEX存储实例'
	},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		finance
	}
});

export default store;