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