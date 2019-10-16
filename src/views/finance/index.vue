<template>
	<div>
		<div class="finance-title">{{ msg }}</div>
	</div>
</template>

<script>
	export default {
		data () {
			 return {
			 	msg: 'Hello Finance!'
			 }
		}
	}
</script>

<style>
	.finance-title {
		font-size: 36px;
		color: #ff4400;
	}
</style>