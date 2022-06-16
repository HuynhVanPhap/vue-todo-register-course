<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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

<style lang="scss" module>
#wrapper {
    height: 100%;
    display: flex;
    justify-content: center;

    &>h3 {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: darkcyan;
        text-decoration: underline;
        //letter-spacing: 0.18px;
    }
}
</style>