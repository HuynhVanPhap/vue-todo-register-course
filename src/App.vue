<script lang="ts">
  import { defineComponent } from '@vue/composition-api'
  import Title from './components/common/Title/index.vue'
  import Form from './components/Form/index.vue'
  import List from './components/List/index.vue'
  import Detail from './components/Detail/index.vue'

  export default defineComponent({
      name: 'App',
      components: {
        Title,
        Form,
        List,
        Detail
      },
      setup() {
          
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
          <List />
      </div>
    </div>
    <div :id="$style.detailWrapper">
      <div :class="$style.title">
        <Title content="Thông tin học sinh" />
      </div>
      <div :class="$style.container">
          <Detail />
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
