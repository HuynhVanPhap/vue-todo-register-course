import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'List',
    setup() {
        const students = reactive([
            {
                name: 'Nguyễn Văn A',
                gender: 1
            },
            {
                name: 'Phạm Thị B',
                gender: 0
            }
        ]);

        return {
            students
        }
    }
});