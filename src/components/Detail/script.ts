import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'Detail',
    setup() {
        const student = reactive({
            name: 'Nguyên Văn A',
            birthday: '5/4/1998',
            gender: 1,
            class: 'A3/1',
            subjects: [
                'PHP',
                'Vue'
            ]
        });

        return {
            student
        }
    }
})