<script setup lang="ts">
const { $viewport } = useNuxtApp();

const route = useRoute();
const courseSlug = route.params.course;

const { data: courseRef } = await useFetch("/api/course-by-slug", {
  method: "GET",
  immediate: true,
  query: { courseSlug },
});

const { data: lessons } = await useFetch("/api/course", {
  method: "GET",
  immediate: true,
  query: { courseId: courseRef.value.id },
});
</script>

<template>
  <div id="course">
    <div id="course-header">
      <h1 id="course-title">{{ courseRef.title }}</h1>
      <div id="course-subtitle">{{ courseRef.description }}</div>
    </div>
    <h2 id="lessons-header">Lessons</h2>
    <ul>
      <li class="lesson-link" v-for="lesson of lessons">
        <NuxtLinkLocale :to="`/blog/${lesson.url_slug}`">
          <div class="course-lesson-title">{{ lesson.title }}</div>
          <div class="course-lesson-abstract">{{ lesson.abstract }}</div>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style>
#lessons-header {
  margin: 1.5rem 0;
  font-size: 1.8rem;
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
}

#course {
  padding: var(--main-contents-padding);
}

#course ul {
  padding: 0;
}

#course-subtitle,
.course-lesson-abstract {
  font-size: 1.1rem;
}

#course-header {
  background-color: var(--color-main-lighter);
  border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast);
  padding: 1rem;
}

.lesson-link {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  list-style-type: none;
  /* border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast); */
  margin-bottom: 1rem;
  width: 100%;
}

.lesson-link .course-lesson-title {
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.lesson-link:hover {
  text-decoration: none;
  border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast);
  background-color: var(--color-main-lighter);
}
</style>
