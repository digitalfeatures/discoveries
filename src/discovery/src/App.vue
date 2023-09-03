<script setup lang="ts">
import Podcast from './components/podcast.vue';
import Todo from './components/todo.vue';
import ProductHunt from './components/producthunt.vue';

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  // Fix BUG: https://github.com/themesberg/flowbite/issues/589
  // @ts-ignore
  const _ = initFlowbite;
})
</script>

<template>
  <div class="container">
    <section class="main">
      <Todo />
    </section>
    <section class="side">
      <ProductHunt />
      <Podcast />
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.main {
  width: 840px;
}

.side {
  margin-left: 1em;
}
</style>
