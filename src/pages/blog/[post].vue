<script setup lang="ts">
const { post: postSlug } = useRoute().params;

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

useHead({
  title: postRef.value.title,
});

if (!error.value) {
  courseSlug.value = courseRef.value.url_slug;
}
</script>

<template>
  <div id="post">
    <div id="post-header">
      <h2>{{ postRef.title }}</h2>
      <div>{{ postRef.abstract }}</div>
    </div>
    <CourseAnchor v-if="courseSlug" v-bind="courseRef" />
    <div id="post-contents" v-html="postHTML"></div>
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
  line-height: 1.5rem;
}

#post-contents pre {
  background-color: var(--color-main-darker);
  color: var(--color-main-lighter);
  padding: var(--main-contents-header-padding);
  border-radius: 0.5rem;
  font-family: monospace;
}

p > code {
  background-color: var(--color-main-darker);
  color: var(--color-main-lighter);
  padding: 0.3rem;
  border-radius: 0.3rem;
  font-family: monospace;
}

#post-contents img {
  display: block;
  width: 100%;
}

#if-desktop #post-contents .img-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#if-desktop #post-contents img {
  width: 30vw;
  margin: auto 0;
}

#post-contents h1,
#post-contents h2,
#post-contents h3 {
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
}

#if-mobile code {
  overflow-x: scroll;
}

p.note {
  background-color: var(--color-main-lighter);
  border-left: var(--border-header-width) solid var(--color-main-note);
  padding: 1rem;
  margin-top: 1rem;
}
</style>
