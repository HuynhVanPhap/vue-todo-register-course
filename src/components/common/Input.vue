<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Input',
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder: {
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
            :type="type"
            :placeholder="placeholder"
        >

        <span :class="$style.focusBg"></span>
    </div>
</template>

<style lang="scss" module>
#wrapper {
    width: 100%;
    position: relative;

    &>input {
        width: 100%;
        height: 3.5em;
        color: #81ecec;
        box-sizing: border-box;
        letter-spacing: 1px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 7px 14px 9px;
        transition: 0.5s;

        &:focus {
            outline: none;
            border: 2px solid #00cec9;
        }
        &~.focusBg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #00cec9;
            opacity: 0;
            transition: 0.5s;
            z-index: -1;
        }
        &:focus~.focusBg {
            transition: 0.5s;
            opacity: 1;
        }
    }
}
</style>
