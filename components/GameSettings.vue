<script setup lang="ts">
const state = useDefaultStore()
</script>

<template>
  <div class="olive-win noto-sans-regular" id="settings-bar">
    <fieldset id="main-settings">
      <legend>Game Settings</legend>
      <fieldset id="board-size">
        <legend>Board size</legend>
        <div>
          <input
            type="radio"
            id="small"
            value="small"
            name="canvasSize"
            v-model="state.stageSize"
            checked
          />
          <label for="small">Small</label>
        </div>
        <div>
          <input
            type="radio"
            id="medium"
            value="medium"
            name="canvasSize"
            v-model="state.stageSize"
          />
          <label for="small">Medium</label>
        </div>
        <div>
          <input
            type="radio"
            id="large"
            value="large"
            name="canvasSize"
            v-model="state.stageSize"
          />
          <label for="small">Large</label>
        </div>
      </fieldset>
      <fieldset id="key-bindings">
        <legend>Key bindings</legend>
        <div><b>R</b> - Reset game</div>
        <div><b>Z</b> - Pause/Unpause game</div>
      </fieldset>
    </fieldset>
  </div>
</template>

<style scoped>
#settings-bar {
  font-size: 1.3rem;
  padding: 0.8rem;
  display: flex;
  text-align: left;
  height: 100%;
}

#board-size {
  display: flex;
  flex-direction: row;
  height: fit-content;
}

#key-bindings {
  height: fit-content;
}

#main-settings {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#board-size div {
  padding: 0.25rem;
}

fieldset {
  border: 0.2rem solid #808d7c;
}

legend {
  font-weight: bold;
}
</style>
