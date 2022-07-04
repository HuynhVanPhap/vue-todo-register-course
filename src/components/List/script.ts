import { defineComponent, ref, onMounted, onUpdated, onBeforeUpdate } from 'vue'
import type { PropType } from 'vue'
import Student from '../../types/Student'
import * as data from '../../static/data'

export default defineComponent({
    name: 'List',
    props: {
        students: [] as PropType<Student[]>
    },
    emits: [
        'onShowDetail',
        'onDelete'
    ],
    setup(props, { emit }) {
        const students = props.students;

        function onShowDetail(id: number | undefined) {
            emit('onShowDetail', id);
        }

        function onDelete(index: number) {
            emit('onDelete', index);
        }

        return {
            students,
            onShowDetail,
            onDelete
        }
    },
});