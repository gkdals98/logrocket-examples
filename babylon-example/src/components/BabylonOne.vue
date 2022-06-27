<template>
    <h3>BabyloneOne</h3>
    <canvas></canvas>
</template>
<script setup lang="ts">
import { BabylonScene } from "./BabylonScene.js"
import { onMounted } from 'vue'
//!로 컴파일러에게 canvas는 무조건 할당되어있음을 전달함. null체크 불필요 선언
onMounted(() => {
    const canvas = document.querySelector("canvas")!;
    new BabylonScene(canvas)
})
</script>