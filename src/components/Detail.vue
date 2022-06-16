<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Detail',
    data() {
        return {
            student: {
                name: 'Nguyên Văn A',
                birthday: '5/4/1998',
                gender: 1,
                class: 'A3/1',
                subjects: [
                    'PHP',
                    'Vue'
                ]
            }
        }
    }
})
</script>

<template>
    <div :id="$style.wrapper">
        <table>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Họ và tên</td>
                <td :class="$style.info">{{ student.name }}</td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Ngày sinh</td>
                <td :class="$style.info">{{ student.birthday }}</td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Giới tính</td>
                <td :class="$style.info">
                    <fa :icon="['fas', 'mars']" color="#74b9ff" v-if="student.gender" />
                    <fa :icon="['fas', 'venus']" color="#f8a5c2" v-if="!student.gender" />
                </td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Lớp</td>
                <td :class="$style.info">{{ student.class }}</td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Môn học</td>
                <td :class="$style.info">
                    <ul>
                        <li v-for="(subject, index) in student.subjects" :key="index">{{ subject }}</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" module>
#wrapper {
    @include wrapper();

    table {
        width: 100%;
        table-layout:fixed;
        .title, .info {
            box-sizing: border-box;
            @extend %three-dot;

        }      
        .title {
            width: 30%;
            font-size: 15px;
            color: #0abde3;
        }
        .info {
            width: 70%;
            color: #1dd1a1;
        }
        .smallRow {
            height: 50px;
        }
    }
}

ul {
    padding: 0;
    margin: 1em;
}
</style>