<script setup lang="ts">
const { locale } = useI18n();
const { data: newsItems } = useFetch("/api/latest-posts", {
  method: "GET",
  query: {
    locale: locale,
  },
});
</script>

<template>
  <div id="news-gallery">
    <NewsCard v-bind="item" v-for="item in newsItems" :key="item.id" />
  </div>
</template>

<style>
#news-gallery {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
</style>
