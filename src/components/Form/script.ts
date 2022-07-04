import { 
    defineComponent,
    defineEmits,
    reactive,
    toRefs,
    ref,
    onUpdated,
    onBeforeUpdate
} from 'vue'
import Input from '@common/Input/index.vue'
import Radio from '@common/Radio/index.vue'
import Button from '@common/Button/index.vue'
import Student from '../../types/Student'
import * as data from '../../static/data'

export default defineComponent({
    name: 'Form',
    components: {
        Input,
        Radio,
        Button
    },
    props: {},
    emits: ['addNewStudent'],
    setup(props, { emit }) {
        const genders = data.genders;
        const classes = data.classes;
        
        const student = reactive<Student>({
            ...data.initStudent
        }); 
        
        const getRandomInt = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        function handleSubmit() {
            console.log('Form: Form chạy hàm handleSubmit');
            console.log('Form: Xử lý');
            emit('addNewStudent', {...student});
            Object.assign(student, {
                id: getRandomInt(3, 100),
                ...data.initStudent
            });
            console.log('Form: Thông tin student được gởi lên App');
            console.log(student);
        }

        onBeforeUpdate(() => {
            console.log('Form: Form chạy hàm onBeforeUpdate');
            console.log('Form: Thông tin student onBeforeUpdate');
            console.log(student);
        });

        onUpdated(() => {
            console.log('Form: Form chạy hàm onUpdated');
            console.log('Form: Thông tin student onUpdated');
            console.log(student);
        });

        return {
            // ...toRefs(state),
            student,
            classes,
            genders,
            handleSubmit
        }
    },
})