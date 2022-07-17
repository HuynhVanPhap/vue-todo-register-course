<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUpdate } from 'vue'
import type { PropType } from 'vue'
import { useStore } from '../../store';
import studentRepo from '../../repository/student';

export default defineComponent({
    name: 'List',
    emits: [
        'onShowDetail'
    ],
    setup(props, { emit }) {
        const store = useStore();
        const students = ref(store.state.students.data);

        function onShowDetail(id: number | undefined) {
            emit('onShowDetail', id);
        }

        async function handleDelete(id: number | undefined) {
            await studentRepo.remove(id);
        }

        onMounted(async () => {
            const data = await studentRepo.getList().then((res: any) => {
                return res;
            });
            Object.assign(students.value, {...data});
        });

        return {
            students,
            onShowDetail,
            handleDelete
        }
    }
});
</script>

<template>
    <div :id="$style.wrapper">
        <div :id="$style.list">
            <div :class="$style.item" v-for="(student, index) in students" :key="index">
                <div :class="$style.gender">
                    <fa :icon="['fas', 'mars']" color="#74b9ff" v-if="student.gender === 1" />
                    <fa :icon="['fas', 'venus']" color="#f8a5c2" v-if="student.gender === 0" />
                </div>
                <div :class="$style.name">
                    <span>{{ student.name }}</span>
                </div>
                <div :class="$style.action">
                    <el-button 
                        type="primary"
                        circle
                        size="small"
                        @click="onShowDetail(student.id)"
                    >
                        <fa :icon="['fas', 'eye']" />
                    </el-button>
                    <el-button 
                        type="danger" 
                        circle
                        size="small"
                        @click="handleDelete(student.id)"
                    >
                        <fa :icon="['fas', 'trash-can']" />
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module src="./styles.scss"></style>