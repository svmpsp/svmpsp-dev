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
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="lesson-desktop">
    <div class="margins">
      <NuxtLinkLocale id="back-link" :to="courseLink"
        >Back to course</NuxtLinkLocale
      >
      <div id="lesson-desktop" v-html="lessonHTML"></div>
    </div>
  </div>
  <div v-else id="lesson-mobile">
    <NuxtLinkLocale id="back-link" :to="courseLink"
      >Back to course</NuxtLinkLocale
    >
    <div v-html="lessonHTML"></div>
  </div>
</template>

<style>
#lesson-mobile {
  padding: 1rem;
}

#lesson-desktop #back-link {
  display: block;
  margin-top: 1.5rem;
}

#lesson-mobile #back-link {
  display: block;
  margin-bottom: 1rem;
}

#lesson-desktop h1,
#lesson-desktop h2,
#lesson-desktop h3 {
  margin-top: 1.5rem;
}

#lesson-desktop {
  font-size: large;
  font-weight: 500;
}

#lesson-desktop pre,
#lesson-mobile pre {
  background-color: var(--global-color-30);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5;
  font-family: monospace;
  font-size: 1.1rem;
}

#lesson-mobile pre {
  overflow: scroll;
}
</style>
