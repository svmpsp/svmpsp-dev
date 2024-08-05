<script setup lang="ts">
import CourseCard from "./CourseCard.vue";

const courses = [
  {
    title: "Programming in Python 🐍",
    description: "Learn to program in hours with Python",
    img: "abc",
    id: 1,
  },
  {
    title: "Programming in Python 🐍",
    description: "Learn to program in hours with Python",
    img: "abc",
    id: 2,
  },
  {
    title: "Programming in Python 🐍",
    description: "Learn to program in hours with Python",
    img: "abc",
    id: 3,
  },
];
</script>

<template>
  <div id="course-gallery" v-for="course in courses">
    <CourseCard v-bind="course" />
  </div>
</template>

<style>
#course-gallery {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
}
</style>
