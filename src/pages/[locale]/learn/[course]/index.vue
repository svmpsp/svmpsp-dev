<script setup lang="ts">
const { $viewport } = useNuxtApp();
const route = useRoute();
const courseId = route.params.course;
const locale = route.params.locale;

const { data: lessons, error } = await useFetch("/api/lessons", {
  method: "GET",
  immediate: true,
  query: { c: courseId },
});
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="course-desktop">
    <div class="margins">
      <h2>Programming in Python</h2>
      <ol>
        <li class="lesson-link" v-for="lesson of lessons">
          <NuxtLink :to="`/${locale}/learn/${courseId}/${lesson.id}`">
            {{ lesson.title }}
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
  <div v-else id="course-mobile"></div>
</template>

<style>
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
