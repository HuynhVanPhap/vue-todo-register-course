<script lang="ts">
import { 
  defineComponent, 
  reactive,
  onBeforeUpdate,
  onUpdated,
  ref,
  toRefs,
  computed 
} from 'vue'
import Title from './components/common/Title/index.vue'
import Form from './components/Form/index.vue'
import List from './components/List/index.vue'
import Detail from './components/Detail/index.vue'
import Student from './types/Student'
import * as data from './static/data'

export default defineComponent({
    name: 'App',
    components: {
      Title,
      Form,
      List,
      Detail
    },
    setup() {
      const state: {
        student: Student
      } = reactive({
        student: data.initStudent
      });

      const students = ref(data.students);

      function addNewStudent(propStudent: Student) {
        console.log('App: App chạy hàm addNewStudent');
        console.log('App: Xử lý');
        // state.student = propStudent;
        // Object.assign(state.student, propStudent);
        students.value.push({
            ...propStudent
        });
        console.log('App: Thông tin student trên App');
        console.log(state.student);
      }

      function handleShowDetail(id: number | undefined) {
        const student = students.value.find(item => item.id === id);
        // state.student = {...student} as Student;
        Object.assign(state.student, {...student});
        console.log('Check ở đây');
        console.log(state.student);
      }

      function handleDelete(index: number) {
        // console.log(id);
        // students.value = students.value.filter(item => item.id != id);
        students.value.splice(index, 1);
        console.log(students.value);
      }

      onBeforeUpdate(() => {
        console.log('App: App chạy hàm onBeforeUpdate');
        console.log('App: Thông tin student onBeforeUpdate');
        console.log(state.student);
      });

      onUpdated(() => {
        console.log('App: App chạy hàm onUpdated');
        console.log('App: Thông tin student onUpdated');
        console.log(state.student);
      });

      return {
        ...toRefs(state),
        students,
        addNewStudent,
        handleShowDetail,
        handleDelete
      }
    },
})
</script>

<template>
  <div :id="$style.wrapper">
    <div :id="$style.formWrapper">
      <div :class="$style.title">
        <Title content="Phiếu Đăng kí môn học" />
      </div>
      <div :class="$style.container">
        <Form @add-new-student="addNewStudent" />
      </div>
    </div>
    <div :id="$style.listWrapper">
      <div :class="$style.title">
        <Title content="Danh sách học sinh" />
      </div>
      <div :class="$style.container">
          <List 
            :students="students"
            @on-show-detail="handleShowDetail"
            @on-delete="handleDelete"
          />
      </div>
    </div>
    <div :id="$style.detailWrapper">
      <div :class="$style.title">
        <Title content="Thông tin học sinh" />
      </div>
      <div :class="$style.container">
          <Detail :student="student" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module src="./App.scss"></style>
