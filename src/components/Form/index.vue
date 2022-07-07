<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Input from '@common/Input/index.vue'
import Radio from '@common/Radio/index.vue'
import Button from '@common/Button/index.vue'
import * as data from '../../static/data'
import Student from '../../types/Student'
import { useStore } from '../../store'
import { StudentsMutationTypes } from '../../store/students/mutation-types'

export default defineComponent({
    name: 'Form',
    components: {
        Input,
        Radio,
        Button
    },
    data() {},
    setup(props, { emit }) {
        const store = useStore();
        const genders = data.genders;
        const classes = data.classes;
        const student = reactive<Student>(data.initStudent); 

        const handleSubmit = () => {
            console.log(student);
            store.commit(StudentsMutationTypes.STORE_DATA, {...student});
        }

        return {
            genders,
            classes,
            student,
            handleSubmit
        }
    },
    computed: {}
})
</script>

<template>
    <div :id="$style.wrapper">
        <form @submit.prevent="handleSubmit">
            <div :class="$style.formInput">
                <Input
                    type="text"
                    v-model="student.name"
                    placeholder="Họ và tên"
                />
            </div>
            <div :class="$style.formInput">
                <Input
                    type="date"
                    v-model="student.birthday"
                />
            </div>
            <div :class="$style.formLabel">
                <span>Giới tính</span>
            </div>
            <div :class="$style.formRadio">
                <el-radio-group
                    v-for="(gender, index) in genders" :key="index"
                    :class="$style.formRadio"
                    v-model="student.gender"
                >
                    <el-radio
                        :class="$style.formRadioChild" 
                        :label="index"
                    >
                        {{ gender }}
                    </el-radio>
                </el-radio-group>
            </div>
            <div :class="$style.formLabel">
                <span>Lớp</span>
            </div>
            <div :class="$style.formInput">
                <el-select v-model="student.class" placeholder="Sinh viên thuộc lớp" size="large" :style="'width: 100%'">
                    <el-option
                        v-for="item in classes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
            <div :class="$style.formLabel">
                <span>Môn học</span>
            </div>
            <div :class="$style.formInput">
                <div :class="$style.wrapCheckbox">
                    <el-checkbox-group :class="$style.wrapCheckbox" v-model="student.courses">
                        <el-checkbox
                            value="JavaScript"
                            label="JavaScript"
                            size="large"
                            border
                        />
                        <el-checkbox
                            value="PHP"
                            label="PHP"
                            size="large"
                            border
                        />
                        <el-checkbox
                            value="ReactJS"
                            label="ReactJS"
                            size="large"
                            border
                        />
                    </el-checkbox-group>
                </div>
            </div>
            <div :class="$style.formButton">
                <Button type="submit" label="Thêm mới" />
            </div>
        </form>
    </div>
</template>

<style lang="scss" module src="./styles.scss"></style>
