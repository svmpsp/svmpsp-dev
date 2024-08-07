<script setup lang="ts">
const { $viewport } = useNuxtApp();
const route = useRoute();
const lessonId = route.params.id;

const { data: lessonHTML } = await useFetch("/api/lesson-html", {
  query: {
    c: "programming-in-python",
    l: lessonId,
  },
});
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="lesson-desktop">
    <div class="margins">
      <div id="lesson-desktop" v-html="lessonHTML"></div>
    </div>
  </div>
  <div v-else id="lesson-mobile">I am mobile</div>
</template>

<style>
#lesson-desktop h1,
#lesson-desktop h2,
#lesson-desktop h3 {
  margin-top: 1.5rem;
}

#lesson-desktop {
  font-size: large;
  font-weight: 500;
}

#lesson-desktop pre {
  background-color: var(--global-color-30);
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5;
  font-family: monospace;
  font-size: 1.1rem;
}
</style>
