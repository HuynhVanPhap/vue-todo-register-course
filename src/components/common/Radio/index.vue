<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Radio',
    props: {
        label: {
            type: String
        }
    },
    setup() {
        
    },
})
</script>

<template>
    <div :id="$style.wrapper">
        <input
            type="radio"
        >

        <span>{{ label }}</span>
    </div>
</template>

<style lang="scss" module src="./styles.scss"></style>
