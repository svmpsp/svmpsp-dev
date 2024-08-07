<script setup lang="ts">
const router = useRouter();
console.log("router: ", router.getRoutes());

definePageMeta({
  redirect: "/en/",
});
</script>

<style>
body {
  background-color: var(--global-color-60);
  color: var(--global-color-30);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
}

.margins {
  width: 750px;
  margin: 0 auto;
}

#index-main-contents {
  display: flex;
  flex-direction: column;
}

.lobster-regular {
  font-family: "Lobster", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.noto-sans-regular {
  font-family: "Noto Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
</style>
