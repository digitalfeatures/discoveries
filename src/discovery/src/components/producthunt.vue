<script setup lang="ts">
import { onMounted } from 'vue';
import { EMethod, fetch } from '../libraries/fetch';

onMounted(async () => {
    setTimeout(async () => {
        const data = await fetch('https://www.producthunt.com/feed', EMethod.GET);
        console.warn('data', data);
    }, 5000)
})
</script>

<template>
    <section class="producthunt-section">
    </section>
</template>

<style scoped></style>
