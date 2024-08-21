<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("navbarAbout"),
});
</script>

<template>
  <div id="about">
    <AboutContents />
  </div>
</template>
