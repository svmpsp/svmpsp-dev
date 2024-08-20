<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: "Home",
});
</script>

<template>
  <div id="index">
    <h2>{{ t("homeNewsHeader") }}</h2>
    <LatestNews />
    <h2 id="course-head">{{ t("homeLearnHeader") }}</h2>
    <CourseGallery />
  </div>
</template>

<style>
#index {
  padding: var(--main-contents-padding);
  line-height: var(--main-contents-line-height);
}

#index > h2 {
  font-size: var(--main-contents-h2-font-size);
}

#course-head {
  margin-top: var(--main-contents-section-margin-top);
}
</style>
