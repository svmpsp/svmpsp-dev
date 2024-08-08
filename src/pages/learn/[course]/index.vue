<script setup lang="ts">
const { $viewport } = useNuxtApp();
const route = useRoute();
const courseId = route.params.course;

const { locale } = useI18n();

const { data: lessons, error } = await useFetch("/api/lessons", {
  method: "GET",
  immediate: true,
  query: { courseId: courseId, locale: locale },
});
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="course-desktop">
    <h2>{{ courseId }}</h2>
    <ul>
      <li class="lesson-link" v-for="lesson of lessons">
        <NuxtLinkLocale :to="`/learn/${courseId}/${lesson.id}`">
          {{ lesson.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
  <div v-else id="course-mobile">
    <h2>{{ courseId }}</h2>
    <ul>
      <li class="lesson-link" v-for="lesson of lessons">
        <NuxtLinkLocale :to="`/learn/${courseId}/${lesson.id}`">
          {{ lesson.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style>
#course-mobile,
#course-desktop {
  padding: 1rem;
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
