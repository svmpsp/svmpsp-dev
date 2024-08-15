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
        <h3>New post:</h3>
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
  min-width: 350px;
}

.news-card {
  min-height: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 1rem;
  background: linear-gradient(var(--color-main-lighter), #fff);
  border: 2px solid var(--color-main-shadow-color);
  border-radius: 1rem;
  box-shadow: 3px 3px 3px var(--color-main-shadow-color);
  color: var(--color-main-darker);
}

.news-card:hover {
  background: linear-gradient(#fff, var(--color-main-lighter));
  box-shadow: 5px 5px 5px var(--color-main-shadow-color);
}

.abstract-box {
  font-size: 1.1rem;
}
</style>
