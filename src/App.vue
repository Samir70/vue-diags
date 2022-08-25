<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import * as diags from "./main"

const tests = {
  circleWithRadiusTest: { r: 12, penColour: "black", fillColour: "white" }
}
</script>

<template>
  <component v-bind:is="diags.circles.withRadius" v-bind:params="tests.circleWithRadiusTest" />
</template>

<style scoped>
</style>
