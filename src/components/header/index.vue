<template>
	<div>
		<div class="header">
			<span class="back" v-on:click="goBack"></span>
			<span class="title">{{ title }}</span>
			<span class="menu" v-on:click="menuEvent"></span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {}
		},
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			goBack () {
				this.$router.go(-1);
			},
			menuEvent () {
				this.$emit('menuRun');
			}
		}
	}
</script>

<style>

	body {
		padding-top: 50px;
	}

	.header {
		width: 100%;
		height: 50px;
		line-height: 50px;
		display: flex;
		background: #3385ff;
		text-align: center;
		position: fixed;
		top: 0px;
	}

	.back, .menu {
		width: 50px;
		cursor: pointer;
	}

	.back {
		
		background: url('../../assets/images/left.png') center no-repeat;
		background-size: 50% 50%;
	}

	.menu {
		background: url('../../assets/images/menu.png') center no-repeat;
		background-size: 50% 50%;
	}

	.title {
		flex: 1;
		font-size: 20px;
		color: #ffffff;
	}

</style>