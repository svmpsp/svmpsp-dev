<script setup lang="ts">
const { $viewport } = useNuxtApp();
const route = useRoute();
const { locale } = useI18n();

const { course: courseId, lesson: lessonId } = route.params;

const courseLink = `/learn/${courseId}`;

const { data: lessonHTML } = await useFetch("/api/lesson-html", {
  query: {
    courseId: courseId,
    lessonId: lessonId,
    locale: locale,
  },
});
</script>

<template>
  <div id="lesson">
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="lesson-desktop">
      <div class="margins">
        <NuxtLinkLocale id="back-link" :to="courseLink"
          >&lt;&lt;&lt; Back to course</NuxtLinkLocale
        >
        <div v-html="lessonHTML"></div>
        <NuxtLinkLocale id="back-link" :to="courseLink"
          >&lt;&lt;&lt; Back to course</NuxtLinkLocale
        >
      </div>
    </div>
    <div v-else id="lesson-mobile">
      <NuxtLinkLocale id="back-link" :to="courseLink"
        >&lt;&lt;&lt; Back to course</NuxtLinkLocale
      >
      <div v-html="lessonHTML"></div>
      <NuxtLinkLocale id="back-link" :to="courseLink"
        >&lt;&lt;&lt; Back to course</NuxtLinkLocale
      >
    </div>
  </div>
</template>

<style>
#lesson {
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
}

#lesson pre {
  background-color: var(--global-color-30);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5;
  font-family: monospace;
}

#lesson-mobile pre {
  overflow: scroll;
}
</style>
