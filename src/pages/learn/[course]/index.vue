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
    <h2>{{ courseRef.title }}</h2>
    <ol>
      <li class="lesson-link" v-for="lesson of lessons">
        <NuxtLinkLocale :to="`/learn/${courseSlug}/${lesson.url_slug}`">
          {{ lesson.title }}
        </NuxtLinkLocale>
      </li>
    </ol>
  </div>
</template>

<style>
#course {
  padding: 1.5rem;
}

.lesson-link {
  font-size: 1.2rem;
  padding: 0.5rem 0;
  width: fit-content;
}

.lesson-link:hover {
  font-weight: bolder;
}
</style>
