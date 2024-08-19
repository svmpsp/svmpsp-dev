<script setup lang="ts">
const route = useRoute();

const { post: postSlug } = route.params;

const { data: postRef } = await useFetch("/api/post-by-slug", {
  query: {
    postSlug,
  },
});

const { data: postHTML } = await useFetch("/api/post-html", {
  query: {
    postId: postRef.value.id,
  },
});

const courseSlug = ref(null);
const { data: courseRef, error } = await useFetch("/api/course-by-post", {
  query: {
    postId: postRef.value.id,
  },
});

if (!error.value) {
  courseSlug.value = courseRef.value.url_slug;
}
</script>

<template>
  <div id="post">
    <!-- <NuxtLinkLocale id="back-link" :to="courseLink"
      >&lt;&lt;&lt; Back to course</NuxtLinkLocale
    > -->
    <div id="post-header">
      <h2>{{ postRef.title }}</h2>
      <div>{{ postRef.abstract }}</div>
    </div>
    <CourseAnchor v-if="courseSlug" v-bind="courseRef" />
    <div id="post-contents" v-html="postHTML"></div>
    <!-- <NuxtLinkLocale id="back-link" :to="courseLink"
      >&lt;&lt;&lt; Back to course</NuxtLinkLocale
    > -->
  </div>
</template>

<style>
#post-header {
  background-color: var(--color-main-lighter);
  border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast);
  padding: var(--main-contents-header-padding);
}

#post {
  padding: var(--main-contents-padding);
  font-size: var(--main-contents-font-size);
  font-weight: var(--main-contents-font-weight);
}

#post-contents pre {
  background-color: var(--color-main-darker);
  color: var(--color-main-lighter);
  padding: var(--main-contents-header-padding);
  border-radius: 0.5rem;
  font-family: monospace;
}

#post-contents h1,
#post-contents h2,
#post-contents h3 {
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
}

#if-mobile pre {
  overflow: scroll;
}
</style>
