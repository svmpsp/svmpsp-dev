<script setup lang="ts">
const props = defineProps(["title", "description", "id", "img"]);
const courseRoute = `/course/${props.id}`;

// TODO: add translucent image on course card
</script>

<template>
  <NuxtLink :to="courseRoute">
    <div class="course-card-box">
      <h3>{{ props.title }}</h3>
      <div>{{ props.description }}</div>
    </div>
  </NuxtLink>
</template>

<style>
.course-card-box div,
.course-card-box h3,
.course-card-box a,
.course-card-box a:visited,
.course-card-box a:hover,
.course-card-box a:active {
  color: inherit;
  text-decoration: none;
}

.course-card-box {
  border: 2px solid var(--app-card-shadow-color);
  border-radius: 0.8rem;
  box-shadow: 3px 3px 3px var(--app-card-shadow-color);
  padding: 1rem;
  color: var(--global-color-30);
  background-color: var(--global-color-60);
  text-decoration: none;
  width: 450px;
}

.course-card-box:hover {
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
}
</style>
