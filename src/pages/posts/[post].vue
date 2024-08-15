<script setup lang="ts">
const route = useRoute();

const { post: postSlug } = route.params;

const { data: postRef } = await useFetch("/api/post-by-slug", {
  query: {
    postSlug: postSlug,
  },
});

const { data: postHTML } = await useFetch("/api/post-html", {
  query: {
    postId: postRef.value.id,
  },
});
</script>

<template>
  <div id="post">
    <div v-html="postHTML"></div>
  </div>
</template>

<style>
#post {
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
}

#post h2 {
  margin-top: 1.5rem;
}

#post pre {
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
