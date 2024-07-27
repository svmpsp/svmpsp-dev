import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', () => {
  const gameScore = ref(0)
  const gameSpeed = ref(0)
  const highScore = ref(0)
  const stageSize = ref('small')

  function setSize(newSize: 'small' | 'medium' | 'large') {
    stageSize.value = newSize
  }

  function incrementScore() {
    gameScore.value += 100
  }

  function resetScore() {
    gameScore.value = 0
  }

  function incrementSpeed() {
    gameSpeed.value += 1
  }

  function resetSpeed() {
    gameSpeed.value = 0
  }

  function setHighScore(score: number) {
    if (score > highScore.value) {
      highScore.value = score
    }
  }

  return {
    gameScore,
    gameSpeed,
    highScore,
    stageSize,
    setSize,
    incrementScore,
    incrementSpeed,
    resetScore,
    resetSpeed,
    setHighScore
  }
})