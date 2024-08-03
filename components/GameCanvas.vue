<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { Position } from '~/lib/utils'

const state = useDefaultStore()
const canvasElement = ref(null)

const numRows = ref(10)
const numCols = ref(10)

class CanvasManager {
  private canvas: HTMLCanvasElement
  private context2d: CanvasRenderingContext2D
  private tileSize: number = 15

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context2d = canvas.getContext('2d') as CanvasRenderingContext2D
    numRows.value = 20
    numCols.value = 28
    this.canvas.height = numRows.value * this.tileSize
    this.canvas.width = numCols.value * this.tileSize
  }

  updateCanvas(
    snake: Position[],
    food: Position,
    foodColor: string = 'orange',
  ) {
    this.context2d.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (const bodyPart of snake) {
      this.drawCell(bodyPart, '#5F6F65')
      this.drawInnerCell(bodyPart, 'black')
    }
    this.drawCell(food, foodColor)
  }

  drawInnerCell(position: Position, color: string) {
    this.context2d.fillStyle = color
    this.context2d.fillRect(
      (position.col + 0.25) * this.tileSize,
      (position.row + 0.25) * this.tileSize,
      this.tileSize / 2,
      this.tileSize / 2,
    )
  }

  drawCell(position: Position, color: string) {
    this.context2d.fillStyle = color
    this.context2d.fillRect(
      position.col * this.tileSize,
      position.row * this.tileSize,
      this.tileSize,
      this.tileSize,
    )
  }
}

let canvasManager: CanvasManager | undefined = undefined
onMounted(() => {
  if (canvasElement.value) {
    canvasManager = new CanvasManager(canvasElement.value)
  }
})

function updateCanvas(
  snake: Position[],
  food: Position,
  foodColor: string = 'orange',
) {
  canvasManager?.updateCanvas(snake, food, foodColor)
}
</script>

<template>
  <div id="stage-container">
    <canvas id="stage" ref="canvasElement" :key="state.stageSize"></canvas>
    <ScoreBoard />
    <SnakeGame :rows="numRows" :cols="numCols" @redraw="updateCanvas" />
  </div>
</template>

<style>
#stage-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
}

#stage {
  background-color: lightgrey;
  border: 0.2rem solid #808d7c;
}
</style>
