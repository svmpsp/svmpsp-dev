<script setup lang="ts">
const route = useRoute();
const courseId = route.params.id;
</script>

<template>
  <div>I am course {{ courseId }}</div>
</template>
