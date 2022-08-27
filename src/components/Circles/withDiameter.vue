<script setup>
const props = defineProps({
    params: Object
})
const rotation = `rotate(${props.params.angle})`
</script>
<template>
    <svg viewBox="0 0 400 400" v-bind:transform="rotation" >
        <circle cx="200" cy="200" r="195" v-bind:stroke="params.penColour" stroke-width="5"
            v-bind:fill="params.fillColour" />
        <line x1="5" y1="200" x2="395" y2="200" v-bind:stroke="params.penColour" stroke-width="4" />
        <text x="190" y="190">{{ params.r }}</text>
    </svg>
    <p>circle.withDiameter: {{ props.params }}</p>
</template>
<style>
svg {
    height: 30vh;
    width: auto;
}

text {
    font-size: 3em;
}
</style>