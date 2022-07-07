<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: "Button",
    props: {
        type: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    }
})
</script>

<template>
    <div :id="$style.wrapper">
        <button
            type="submit"
        >
            <span>{{ label }}</span>
        </button>
    </div>
</template>

<style lang="scss" module src="./styles.scss"></style>