<script setup>
const props = defineProps({
    params: Object
})
</script>
<template>
    <svg viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="160" v-bind:stroke="params.penColour" stroke-width="5"
            v-bind:fill="params.fillColour" />
        <line x1="200" y1="200" x2="360" y2="200" v-bind:stroke="params.penColour" stroke-width="4" />
        <text x="260" y="190">{{ params.r }}</text>
    </svg>
    <p>CircleWithRadius: {{ props.params }}</p>
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