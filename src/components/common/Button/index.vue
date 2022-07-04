<template>
    <div :id="$style.wrapper">
        <button
            type="button"
            @click="onHandleSubmit"
        >
            <span>{{ label }}</span>
        </button>
    </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" module src="./styles.scss"></style>