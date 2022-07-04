<template>
    <div :id="$style.wrapper">
        <table>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Họ và tên</td>
                <td :class="$style.info">{{ student?.name }}</td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Ngày sinh</td>
                <td :class="$style.info">{{ student?.birthday }}</td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Giới tính</td>
                <td :class="$style.info">
                    <fa :icon="['fas', 'mars']" color="#74b9ff" v-if="student?.gender" />
                    <fa :icon="['fas', 'venus']" color="#f8a5c2" v-if="!student?.gender" />
                </td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Lớp</td>
                <td :class="$style.info">{{ student?.class }}</td>
            </tr>
            <tr :class="$style.smallRow">
                <td :class="$style.title">Môn học</td>
                <td :class="$style.info">
                    <ul>
                        <li v-for="(subject, index) in student?.courses" :key="index">{{ subject }}</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" module src="./styles.scss"></style>