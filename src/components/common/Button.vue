<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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

<style lang="scss" module>
    #wrapper {
        width: inherit;
        height: inherit;
        
        &>button {
            color: #FFF;
            width: 100%;
            background: violet;
            padding: 10px;
            border-radius: 6px;
            border: 2px solid violet;
            font-size: 20px;
            transition: 0.25s ease;
            text-transform: none;
            line-height: 1.15;
            margin: 0;
            overflow: visible;
            cursor: pointer;
            &:hover {
                opacity: 0.75;
            }
        }
    }
</style>