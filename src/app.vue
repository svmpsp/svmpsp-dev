<script setup lang="ts">
useHead({
  title: "Title - svmpsp.dev",
  meta: [
    {
      name: "description",
      content: "Sivam Pasupathipillai's personal website.",
    },
  ],
  script: [
    {
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7590734585602123",
      crossorigin: "anonymous",
    },
  ],
});

</script>

<template>
  <div>
    <NuxtLayout>
      <MainHeader />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
