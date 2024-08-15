<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  description: String,
  url_slug: String,
  likes: Number,
});
const courseRoute = `/learn/${props.url_slug}`;

// TODO: fix likes markup if there is a large number
// TODO: add translucent image on course card

// TODO: understand course card width error in medium viewports
</script>

<template>
  <NuxtLinkLocale v-bind="{ to: courseRoute, params: { id: props.id } }">
    <div class="course-card">
      <div class="course-card-head-box">
        <h3>{{ props.title }}</h3>
        <h3>+{{ props.likes }}❤️</h3>
      </div>
      <div>{{ props.description }}</div>
    </div>
  </NuxtLinkLocale>
</template>

<style>
.course-card-head-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

/* #if-desktop .course-card {
} */

#if-desktop .course-card {
  width: 500px;
}

.course-card {
  width: 100%;
  border: 2px solid var(--app-card-shadow-color);
  border-radius: 0.8rem;
  box-shadow: 3px 3px 3px var(--app-card-shadow-color);
  padding: 1rem;
  color: var(--global-color-30);
  background: linear-gradient(var(--global-color-60), #ddd);
  text-decoration: none;
  width: fit-content;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.course-card:hover {
  background: linear-gradient(#ddd, var(--global-color-60));
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
}
</style>
