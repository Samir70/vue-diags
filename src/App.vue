<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CircleWithRadius from './components/CircleWithRadius.vue'

const tests = {
  circleWithRadiusTest: { r: 12, penColour: "black", fillColour: "white" }
}
</script>

<template>
  <CircleWithRadius v-bind:params="tests.circleWithRadiusTest" />
</template>

<style scoped>
</style>
