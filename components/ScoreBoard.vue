<!-- DEPRECATED -->
<script setup lang="ts">
const state = useDefaultStore()
</script>

<template>
  <div id="score-board">
    <h2 class="noto-sans-regular score-item">Score: {{ state.gameScore }}</h2>
    <h2 class="noto-sans-regular score-item">Level: {{ state.gameSpeed + 1 }}</h2>
    <h2 class="noto-sans-regular score-item">High score: {{ state.highScore }}</h2>
  </div>
</template>

<style scoped>
#score-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.score-item {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: rleft;
  color: white;
  background-color: rgb(42, 42, 42);
  padding: 0.5rem;
  min-width: 225px;
}
</style>
