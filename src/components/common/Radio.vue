<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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

<style lang="scss" module>
#wrapper {
    width: 100%;
}
</style>
