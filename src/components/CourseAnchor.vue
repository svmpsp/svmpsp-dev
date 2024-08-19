<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  url_slug: String,
});

const courseLink = `/learn/${props.url_slug}`;
</script>

<template>
  <div id="course-anchor">
    <h3>
      <NuxtLinkLocale :to="courseLink">{{ props.title }}</NuxtLinkLocale>
    </h3>
    <div>This post is part of a course series.</div>
  </div>
</template>

<style>
#course-anchor {
  background-color: var(--color-main-lighter);
  border-left: var(--border-header-width) solid var(--color-main-alert);
  padding: 1rem;
  margin-top: 1rem;
}

#course-anchor a {
  text-decoration: underline;
}
</style>
