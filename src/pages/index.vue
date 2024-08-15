<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <div id="index">
    <LatestNews />
    <h1 id="course-head">Most Liked Courses:</h1>
    <CourseGallery />
  </div>
</template>

<style>
#index {
  padding: 1.7rem;
}

#course-head {
  margin-top: 1.5rem;
}
</style>
