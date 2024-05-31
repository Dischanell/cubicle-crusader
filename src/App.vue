<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<div class="container">
		<RouterView />
	</div>
</template>

<style scoped>
.container {
	max-width: 60%;
	margin: auto;
}
</style>