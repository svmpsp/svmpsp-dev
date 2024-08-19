<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  abstract: String,
  modified_at: String,
  url_slug: String,
});
const postLink = `/blog/${props.url_slug}`;
const modifiedDate = new Date(props.modified_at as string).toLocaleDateString();
</script>

<template>
  <NuxtLinkLocale :to="postLink" class="news-card">
    <div class="news-card-header">
      <h3>New post:</h3>
      <h3>{{ modifiedDate }}</h3>
    </div>
    <h2 class="news-card-title">{{ props.title }}</h2>
    <div class="abstract-box">
      <div>
        {{ props.abstract }}
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

.news-card-title {
  text-decoration: underline;
}

#if-desktop .news-card {
  min-width: 100%;
}

@keyframes carouselSlide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500%);
  }
}

.news-card {
  animation: carouselSlide 15s steps(5) 0s infinite forwards;
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1rem;
  background-color: var(--color-main-lighter);
  /* background: linear-gradient(var(--color-main-lighter), #fff); */
  border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast);
  /* border-radius: 1rem; */
  /* box-shadow: 3px 3px 3px var(--color-main-shadow-color); */
  color: var(--color-main-darker);
}

.news-card:hover {
  background: linear-gradient(var(--color-main-lighter), #fff);
  /* border: 2px solid var(--color-main-shadow-color); */
  /* box-shadow: 5px 5px 5px var(--color-main-shadow-color); */
}

.abstract-box {
  font-size: 1.1rem;
}
</style>
