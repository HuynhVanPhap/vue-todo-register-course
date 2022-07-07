<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Input',
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        },
        modelValue: {
            type: String,
            required: true
        }
    },
    emits: ['update:modelValue'],
    setup() {
        
    },
})
</script>

<template>
    <div :id="$style.wrapper">
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
            :placeholder="placeholder"
        >

        <span :class="$style.focusBg"></span>
    </div>
</template>

<style lang="scss" module src="./styles.scss"></style>
