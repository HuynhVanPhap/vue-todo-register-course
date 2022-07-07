<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import Student from './types/Student'
  import * as data from './static/data'
  import Title from './components/common/Title/index.vue'
  import Form from './components/Form/index.vue'
  import List from './components/List/index.vue'
  import Detail from './components/Detail/index.vue'
import { useStore } from './store'

export default defineComponent({
    name: 'App',
    components: {
      Title,
      Form,
      List,
      Detail
    },
    setup() {
        const store = useStore();
        const state: {
          student: Student
        } = reactive({
          student: data.initStudent
        });

      const handleShowDetail = (id: number | undefined) => {
        const student = store.getters.queryStudentById(id);
        Object.assign(state.student, {...student});
      }

      return {
        ...toRefs(state),
        handleShowDetail
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
        <Form />
      </div>
    </div>
    <div :id="$style.listWrapper">
      <div :class="$style.title">
        <Title content="Danh sách học sinh" />
      </div>
      <div :class="$style.container">
          <List @on-show-detail="handleShowDetail" />
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

<style lang="scss" module>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: center;
    align-items: center;
  }
  #formWrapper, #listWrapper, #detailWrapper {
    width: 350px;
    height: 500px;
    background: #f9f9f9;
    border-radius: 6px;
    margin-top: 4rem;
    margin-right: 3.5em;
    margin-left: 2em;
    padding: 10px 10px;
  }
  
  .title {
    height: 10%;
  }
  .container {
    height: 90%;
  }
</style>
