<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  abstract: String,
  modified_at: String,
  url_slug: String,
});
const postLink = `/posts/${props.url_slug}`;
const modifiedDate = new Date(props.modified_at as string).toLocaleDateString();
</script>

<template>
  <NuxtLinkLocale :to="postLink">
    <div class="news-card">
      <div class="news-card-header">
        <h3>New Post:</h3>
        <h3>{{ modifiedDate }}</h3>
      </div>
      <h2>{{ props.title }}</h2>
      <div class="abstract-box">
        <div>
          {{ props.abstract }}
        </div>
      </div>
    </div>
  </NuxtLinkLocale>
</template>

<style>
.news-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#if-mobile .news-card {
  min-width: 70vw;
}

#if-desktop .news-card {
  min-width: 30vw;
}

.news-card {
  min-height: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 1rem;
  background: linear-gradient(var(--global-color-60), #ddd);
  border: 2px solid var(--app-card-shadow-color);
  border-radius: 1rem;
  box-shadow: 3px 3px 3px var(--app-card-shadow-color);
  color: var(--global-color-30);
}

.news-card:hover {
  background: linear-gradient(#ddd, var(--global-color-60));
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
}

.abstract-box {
  font-size: 1.1rem;
}
</style>
