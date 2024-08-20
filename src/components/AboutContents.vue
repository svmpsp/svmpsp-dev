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
        📍 I am a full-stack AI engineer hailing from Italy. I hold a Ph.D in
        Artificial Intelligence, and have more than 5 years of work experience
        under my belt.
      </p>
      <p>
        💚 I am passionate about designing, building & thinkering about
        high-quality software & AI systems. I enjoy writing blog posts and
        courses to share my passion and have fun while doing it.
      </p>
      <p>
        🤖 My tech toolkit includes: Python, deep learning, LLMs, distributed
        systems, Big Data technologies, linux, Typescript, gRPC, web development
        and more.
      </p>
      <p>
        In my spare time, you can find me hiking 🏔, social dancing 🕺🏾, or
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

#about-text > p {
  margin-top: 0;
}
</style>
