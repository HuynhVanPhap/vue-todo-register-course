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

<script lang="ts" src="./script"></script>
<style lang="scss" module src="./styles.scss"></style>