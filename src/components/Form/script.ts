import { defineComponent, reactive, toRefs, ref } from 'vue'
import Input from '@common/Input/index.vue'
import Radio from '@common/Radio/index.vue'
import Button from '@common/Button/index.vue'
import Student from '../../types/Student'

export default defineComponent({
    name: 'Form',
    components: {
        Input,
        Radio,
        Button
    },
    setup() {
        const genders = [
            'Nữ',
            'Nam'
        ];
        const classes = [
            {
                value: 'A3/1',
                label: 'A3/1'
            }, 
            {
                value: 'A5/2',
                label: 'A5/2'
            },
            {
                value: 'A8/1',
                label: 'A8/1'
            }
        ];
        const student = reactive<Student>({
            name: '',
            birthday: '',
            gender: 0,
            class: '',
            courses: [
                'PHP'
            ]
        });
        
        return {
            student,
            classes,
            genders
        }
    },
})