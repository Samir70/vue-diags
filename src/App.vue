<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue"
import * as diags from "./main"

const radius = ref(5);
const penCol = ref("black")
const fillCol = ref("white")
const tests = {
  circleWithRadiusTest: () => {
    return { r: Number(radius.value) || 13, penColour: penCol.value, fillColour: fillCol.value }
  }
}
</script>

<template>
  <component v-bind:is="diags.circles.withRadius" v-bind:params="tests.circleWithRadiusTest()" />
  <div>
    <label for="radius">Radius</label>
    <input type="text" v-model="radius" id="radius" />
  </div>
  <div>
    <label for="pencol">Pen Colour</label>
    <input type="text" v-model="penCol" id="pencol" />
  </div>
  <div>
    <label for="fillcol">Fill Colour</label>
    <input type="text" v-model="fillCol" id="fillcol" />
  </div>
</template>

<style scoped>
label {
  padding: 0px 5px;
}
</style>
