var finance = {
	state: {
		msg: 'this is finance state',
		money: 2000,
		city: 'BK'
	},
	mutations: {
		mutationsRun (state, n) {
			state.money += n;
		},
		test () {
			console.log('小牛牛');
		}
	},
	actions: {
		actionsRun () {
			console.log('actions 执行了');
		},
		getTel () {
			console.warn('this is 10086');
		}
	},
	getters: {
		dbmoney (state) {
			return state.money * 2;
		}
	},
	letters: {
		lets () {
			return '有一新的消息';
		}
	}
}

export default finance;