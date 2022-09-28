<script setup>
const props = defineProps({
    params: Object
})
const rotation = `rotate(${props.params.angle})`
</script>
<template>
    <svg viewBox="0 0 400 400" v-bind:transform="rotation"  width="200px">
        <circle cx="200" cy="200" r="195" v-bind:stroke="params.penColour" stroke-width="5"
            v-bind:fill="params.fillColour" />
        <line x1="5" y1="200" x2="395" y2="200" v-bind:stroke="params.penColour" stroke-width="4" />
        <text font-size="3em" x="190" y="190">{{ params.d }}</text>
    </svg>
</template>
<style>
</style>