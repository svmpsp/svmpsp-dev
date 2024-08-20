<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: "Learn",
});
</script>

<template>
  <div id="learn">
    <h2 id="learn-header">{{ t("learnHeader") }}</h2>
    <CourseGallery />
  </div>
</template>

<style>
#learn {
  padding: var(--main-contents-padding);
}

#learn > h2 {
  font-size: var(--main-contents-h2-font-size);
}
</style>
