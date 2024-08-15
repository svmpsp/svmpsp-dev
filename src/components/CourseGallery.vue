<script setup lang="ts">
const { locale } = useI18n();
const { data: courses } = useFetch("/api/courses", {
  method: "GET",
  query: {
    locale: locale,
  },
});
</script>

<template>
  <div id="course-gallery">
    <CourseCard v-for="course in courses" v-bind="course" />
  </div>
</template>

<style></style>
