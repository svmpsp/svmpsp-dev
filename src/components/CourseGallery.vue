<script setup lang="ts">
import CourseCard from "./CourseCard.vue";

const { data: courses } = useFetch("/api/courses", {
  method: "GET",
});
</script>

<template>
  <div id="course-gallery">
    <CourseCard v-for="course in courses" v-bind="course" />
  </div>
</template>

<style>
#course-gallery {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
}
</style>
