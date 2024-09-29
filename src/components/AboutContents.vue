<script setup lang="ts">
useHead({
  title: "About",
});
</script>

<template>
  <div id="about-contents">
    <ProfilePic />
    <div id="about-text">
      <p>
        📍 I am a full-stack AI specialist hailing from Italy. I hold a Ph.D. in
        data science a a M.Sc. in Computer Engineering.
      </p>
      <p>
        💚 I am passionate about designing, building & tinkering about elegant
        software solutions & AI systems. I enjoy sharing my passions through
        authoring blog posts and courses.
      </p>
      <p>
        🤖 My tech toolkit includes: Python, deep learning, LLMs, big data
        technologies, linux, Typescript, gRPC, web development and more.
      </p>
      <p>
        In my spare time, you can find me hiking 🏔, social dancing 🪇, or
        playing my guitar 🎸.
      </p>
    </div>
  </div>
</template>

<style>
#if-desktop #about-contents {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}

#about-contents {
  padding: var(--main-contents-padding);
}

#about-text {
  font-size: var(--main-contents-font-size);
}

#if-desktop #about-text {
  margin-right: 5vw;
}

#about-text > p {
  margin-top: 0;
}
</style>
