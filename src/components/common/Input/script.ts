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