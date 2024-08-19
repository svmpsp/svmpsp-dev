<script setup lang="ts">
useHead({
  title: "Learn",
});
</script>

<template>
  <div id="learn">
    <h2>Course Catalog</h2>
    <CourseGallery />
  </div>
</template>

<style>
#learn {
  padding: var(--main-contents-padding);
}
</style>
