import { defineComponent, onUpdated } from 'vue'
import type { PropType } from 'vue'
import Student from '../../types/Student'

export default defineComponent({
    name: 'Detail',
    props: {
        student: {
            type: Object as PropType<Student>,
            required: false
        },
    },
    setup(props) {
        const student = props.student;

        onUpdated(() => {
            console.log('Detail: Thông tin student');
            console.log(student);
        });

        return {
            student
        }
    }
})