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

<script lang="ts" src="./script.ts"></script>
<style lang="scss" module src="./styles.scss"></style>