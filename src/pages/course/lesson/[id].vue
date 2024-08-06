<script setup lang="ts">
import * as fs from "node:fs/promises";
const { $viewport } = useNuxtApp();

const { data } = await useFetch(
  "/api/lesson-html?c=programming-in-python&l=what-is-programming",
);

const lessonHTML = data;
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="lesson-desktop">
    <div class="margins">
      <div id="lesson-box" v-html="lessonHTML"></div>
    </div>
  </div>
  <div v-else id="lesson-mobile">I am mobile</div>
</template>

<style>
h1,
h2,
h3 {
  margin-top: 1rem;
}
</style>
