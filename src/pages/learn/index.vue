<script setup lang="ts">
const { $viewport } = useNuxtApp();
</script>

<template>
  <div id="learn">
    <h1>Course Catalog</h1>
    <CourseGallery />
  </div>
</template>

<style>
#learn {
  padding: 1rem;
}

#learn h1 {
  margin-top: 0;
}
</style>
