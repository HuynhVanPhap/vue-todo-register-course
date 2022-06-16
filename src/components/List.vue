<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'List',
    data() {
        return {
            students: [
                {
                    name: 'Nguyễn Văn A',
                    gender: 1
                },
                {
                    name: 'Phạm Thị B',
                    gender: 0
                }
            ]
        }
    }
});
</script>

<template>
    <div :id="$style.wrapper">
        <div :id="$style.list">
            <div :class="$style.item" v-for="(student, index) in students" :key="index">
                <div :class="$style.gender">
                    <fa :icon="['fas', 'mars']" color="#74b9ff" v-if="student.gender" />
                    <fa :icon="['fas', 'venus']" color="#f8a5c2" v-if="!student.gender" />
                </div>
                <div :class="$style.name">
                    <span>{{ student.name }}</span>
                </div>
                <div :class="$style.action">
                    <el-button 
                        type="primary"
                        circle
                        size="small"
                    >
                        <fa :icon="['fas', 'eye']" />
                    </el-button>
                    <el-button 
                        type="danger" 
                        circle
                        size="small"
                    >
                        <fa :icon="['fas', 'trash-can']" />
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
#wrapper {
    @include wrapper();
    padding-top: 15px;
    box-sizing: border-box;

    #list {
        .item {
            width: 100%;
            height: 50px;
            border: 1px solid #81ecec;
            border-radius: 5px;
            display: flex;
            margin-bottom: 5px;
            .gender {
                width: 5%;
                height: 100%;
                display: flex;
                align-items: center;
                margin-left: 10px;
            }
            .name {
                width: 60%;
                height: 100%;
                display: flex;
                align-items: center;
                margin-left: 5px;

                &>span {
                    @extend %three-dot;
                }
            }
            .action {
                width: 25%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
        }
    }
}
</style>