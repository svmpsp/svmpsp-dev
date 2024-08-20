<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  description: String,
  url_slug: String,
  likes: Number,
});
const { locale } = useI18n();
const localeRoute = useLocaleRoute();
const coursePath = localeRoute("learn", locale.value)?.path;
const courseRoute = `${coursePath}/${props.url_slug}`;

// for (const route of useRouter().getRoutes()) {
//   console.log("route: ", route);
// }

// console.log("coursePath is: ", coursePath);

// TODO: fix likes markup if there is a large number
// TODO: add translucent image on course card

// TODO: understand course card width error in medium viewports
</script>

<template>
  <NuxtLinkLocale
    v-bind="{ to: courseRoute, params: { id: props.id } }"
    class="course-card"
  >
    <div class="course-card-head-box">
      <h3 class="course-card-title">{{ props.title }}</h3>
      <h3>+{{ props.likes }}💚</h3>
    </div>
    <div>{{ props.description }}</div>
  </NuxtLinkLocale>
</template>

<style>
.course-card-head-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.course-card-title {
  text-decoration: underline;
}

.course-card {
  border-left: var(--border-header-width) solid
    var(--color-main-accent-contrast);
  width: 100%;
  height: 15vh;
  /* border: 2px solid var(--color-main-shadow-color);
  border-radius: 0.8rem; */
  padding: 1rem;
  color: var(--color-main-darker);
  background-color: var(--color-main-lighter);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  display: block;
}

.course-card:hover {
  width: 100%;
  background: linear-gradient(var(--color-main-lighter), #fff);
}
</style>
