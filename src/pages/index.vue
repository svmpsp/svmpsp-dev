<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <div id="index">
    <h2>Latest News</h2>
    <LatestNews />
    <h2 id="course-head">Popular courses</h2>
    <CourseGallery />
  </div>
</template>

<style>
#index {
  padding: var(--main-contents-padding);
  line-height: var(--main-contents-line-height);
}

#course-head {
  margin-top: var(--main-contents-section-margin-top);
}
</style>
