<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Input from '@common/Input.vue'
import Radio from '@common/Radio.vue'
import Button from '@common/Button.vue'


export default defineComponent({
    name: 'Form',
    components: {
        Input,
        Radio,
        Button
    },
    data() {
        return {
            options: [{
            value: 'A3/1',
            label: 'A3/1'
            }, {
            value: 'A5/2',
            label: 'A5/2'
            }, {
            value: 'A8/1',
            label: 'A8/1'
            }],
            value: ''
        }
    },
    setup() {
        
    },
})
</script>

<template>
    <div :id="$style.wrapper">
        <form>
            <div :class="$style.formInput">
                <Input type="text" placeholder="Họ và tên"/>
            </div>
            <div :class="$style.formInput">
                <Input type="date" />
            </div>
            <div :class="$style.formLabel">
                <span>Giới tính</span>
            </div>
            <div :class="$style.formRadio">
                <div :class="$style.formRadioChild">
                    <Radio label="Nam" />
                </div>
                <div :class="$style.formRadioChild">
                    <Radio label="Nữ" />
                </div>
            </div>
            <div :class="$style.formLabel">
                <span>Lớp</span>
            </div>
            <div :class="$style.formInput">
                <el-select v-model="value" placeholder="Select" size="large" :style="'width: 100%'">
                    <el-option
                    v-for="item in options"
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
                    <el-checkbox v-model="checked1" label="JavaScript" size="large" border />
                    <el-checkbox v-model="checked1" label="PHP" size="large" border />
                    <el-checkbox v-model="checked1" label="ReactJS" size="large" border />
                </div>
            </div>
            <div :class="$style.formButton">
                <Button label="Thêm mới" />
            </div>
        </form>
    </div>
</template>

<style lang="scss" module>
#wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    form {
        .formLabel {
            margin: 15px 0 15px 0;
            padding: 0 10px;
            color: darkcyan;
            text-decoration: blink;
        }
        .formInput {
            margin: 15px 0 15px 0;
        }
        .formButton {
            padding: 2px 5px;
        }
        
        .formRadio {
            width: 100%;
            display: flex;
            padding: 5px 5px;

            .formRadioChild {
                width: 50%;
                margin: 0;
            }
        }
    }
}

.wrapCheckbox {
    display: flex;
}
</style>
