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
      <h2 id="course-title">{{ courseRef.title }}</h2>
      <div id="course-subtitle">{{ courseRef.description }}</div>
    </div>
    <ul>
      <li class="lesson-link" v-for="lesson of lessons">
        <NuxtLinkLocale :to="`/learn/${courseSlug}/${lesson.url_slug}`">
          <div class="course-lesson-title">{{ lesson.title }}</div>
          <div class="course-lesson-abstract">{{ lesson.abstract }}</div>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style>
#course {
  padding: 1.5rem;
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
  border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast);
  margin-bottom: 1rem;
  width: 100%;
}

.lesson-link .course-lesson-title {
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.lesson-link:hover {
  /* font-weight: bolder; */
  text-decoration: none;
  border-left: var(--border-header-width) solid var(--color-main-alert);
  background-color: var(--color-main-lighter);
}
</style>
