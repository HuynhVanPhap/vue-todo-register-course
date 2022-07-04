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
        },
        onHandleSubmit: {
            type: Function,
            required: false
        }
    }
})