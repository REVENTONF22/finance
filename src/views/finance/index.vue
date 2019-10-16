<template>
	<div>
		<HeaderBar v-bind:title="'金融服务'" v-on:menuRun="showMenu"></HeaderBar>
		<div class="content">
			<div class="finance-title">{{ msg }}</div>
			<div class="finance-title">{{ $store.state.finance.msg }}</div>
			<div class="finance-title">{{ $store.state.finance.money }}</div>
			<div class="finance-title">{{ $store.getters.dbmoney }}</div>
			<div class="finance-title">{{ dbmoney }}</div>
			<div class="finance-title">{{ city }}</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
	export default {
		data () {
			 return {
			 	msg: 'Hello Finance!'
			 }
		},
		computed: {
			...mapState({
				city (state) {
					return state.finance.city
				}
			}),
			...mapGetters(['dbmoney'])
		},
		created () {
			this.$store.commit('mutationsRun', 5000);
			this.$store.dispatch('actionsRun');
			this.getTel();
			this.test();
		},
		methods: {
			showMenu () {
				console.log('菜单正在开发中…');
			},
			...mapMutations(['test']),
			...mapActions(['getTel'])
		}
	}
</script>

<style scoped>

	.content {
		padding: 12px;
	}

	.finance-title {
		font-size: 18px;
		color: #ff4400;
	}

</style>