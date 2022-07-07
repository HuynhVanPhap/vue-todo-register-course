<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Title',
    props: {
        content: {
            type: String,
            required: true
        }
    },
    setup() {
        
    },
})
</script>

<template>
    <div :id="$style.wrapper">
        <h3>{{ content }}</h3>
    </div>
</template>

<style lang="scss" module src="./styles.scss"></style>