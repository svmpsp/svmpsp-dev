<script setup lang="ts">
const route = useRoute();

const { course: courseSlug, lesson: lessonSlug } = route.params;

const courseLink = `/learn/${courseSlug}`;

const { data: lessonRef } = await useFetch("/api/post-by-slug", {
  query: {
    postSlug: lessonSlug,
  },
});

const { data: lessonHTML } = await useFetch("/api/post-html", {
  query: {
    postId: lessonRef.value.id,
  },
});
</script>

<template>
  <div id="lesson">
    <NuxtLinkLocale id="back-link" :to="courseLink"
      >&lt;&lt;&lt; Back to course</NuxtLinkLocale
    >
    <div v-html="lessonHTML"></div>
    <NuxtLinkLocale id="back-link" :to="courseLink"
      >&lt;&lt;&lt; Back to course</NuxtLinkLocale
    >
  </div>
</template>

<style>
#lesson {
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
}

#lesson h2 {
  margin-top: 1.5rem;
}

#lesson pre {
  background-color: var(--global-color-30);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5;
  font-family: monospace;
}

#if-mobile pre {
  overflow: scroll;
}
</style>
