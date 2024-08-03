<script setup lang="ts">
import { onMounted } from "vue";

import { positionIsEqual } from "~/lib/utils";
import type { Position } from "~/lib/utils";

const props = defineProps(["rows", "cols"]);
const state = useDefaultStore();

const emit = defineEmits(["redraw"]);

class SnakeGame {
  private defaultUpdateSpeed = 350;
  private minUpdateSpeed = 50;
  private updateSpeedDiff = 50;
  private updateSpeed = this.defaultUpdateSpeed;
  private snake: Position[] = [
    { row: 1, col: 3 },
    { row: 1, col: 2 },
    { row: 1, col: 1 },
  ];
  private food: Position = { row: 5, col: 5 };
  private direction: "up" | "down" | "left" | "right" = "right";
  private isPaused = true;
  private inputEnabled = true;
  private foodColor: string;

  constructor() {
    this.foodColor = this.getRandomColor();
    this.resetGame();
  }

  registerInputs() {
    document.addEventListener("keydown", (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (!this.inputEnabled) return;
      switch (event.key) {
        case "ArrowUp":
          if (this.direction !== "down") {
            this.direction = "up";
            this.inputEnabled = false;
          }
          break;
        case "ArrowDown":
          if (this.direction !== "up") {
            this.direction = "down";
            this.inputEnabled = false;
          }
          break;
        case "ArrowLeft":
          if (this.direction !== "right") {
            this.direction = "left";
            this.inputEnabled = false;
          }
          break;
        case "ArrowRight":
          if (this.direction !== "left") {
            this.direction = "right";
            this.inputEnabled = false;
          }
          break;
        case "z":
          this.isPaused = !this.isPaused;
          break;
        case "r":
          this.resetGame();
          break;
        default:
          break;
      }
    });
  }

  start() {
    this.registerInputs();
    this.resetGame();
    this.gameLoop();
  }

  resetGame() {
    state.setHighScore(state.gameScore);

    this.snake = [
      { row: 5, col: 5 },
      { row: 5, col: 4 },
      { row: 5, col: 3 },
    ];
    this.direction = "right";
    this.updateSpeed = this.defaultUpdateSpeed;
    this.food = { row: 8, col: 8 };
    this.isPaused = true;

    // TODO: consider moving score & speed from
    // global state to Canvas state
    state.resetScore();
    state.resetSpeed();
    emit("redraw", this.snake, this.food, this.foodColor);
  }

  move() {
    if (this.isPaused) {
      return;
    }

    const head = { ...this.snake[0] };
    switch (this.direction) {
      case "up":
        head.row -= 1;
        break;
      case "down":
        head.row += 1;
        break;
      case "left":
        head.col -= 1;
        break;
      case "right":
        head.col += 1;
        break;
    }
    this.snake.unshift(head);

    if (positionIsEqual(head, this.food)) {
      this.placeFood();
      state.incrementScore();
      if (state.gameScore % 300 === 0) {
        if (this.updateSpeed > this.minUpdateSpeed) {
          this.updateSpeed -= this.updateSpeedDiff;
          state.incrementSpeed();
        }
      }
    } else {
      this.snake.pop();
    }
  }

  checkCollisions() {
    const head = { ...this.snake[0] };
    if (
      head.row < 0 ||
      head.row >= props.rows ||
      head.col < 0 ||
      head.col >= props.cols
    ) {
      // console.log('wall collision:', head)
      this.resetGame();
    }
    for (const bodyPos of this.snake.slice(1)) {
      if (positionIsEqual(head, bodyPos)) {
        // console.log('body collision: H=', head, 'B=', bodyPos)
        this.resetGame();
      }
    }
  }

  getRandomPos() {
    return {
      row: Math.floor(Math.random() * props.rows),
      col: Math.floor(Math.random() * props.cols),
    };
  }

  placeFood() {
    this.foodColor = this.getRandomColor();
    this.food = this.getRandomPos();
    for (const bodyPart of this.snake) {
      if (positionIsEqual(bodyPart, this.food)) {
        this.placeFood();
      }
    }
  }

  getRandomColor() {
    const colors = ["blue", "grey", "orange", "purple", "red", "yellow"];
    const rand_idx = Math.floor(Math.random() * colors.length);
    return colors[rand_idx];
  }

  gameLoop() {
    setTimeout(() => {
      this.move();
      this.checkCollisions();
      emit("redraw", this.snake, this.food, this.foodColor);
      this.inputEnabled = true;
      this.gameLoop();
    }, this.updateSpeed);
  }
}

onMounted(() => {
  const game = new SnakeGame();
  game.start();
});
</script>

<template>
  <div class="GameState" hidden>{{ props.cols }} {{ props.rows }}</div>
</template>

<style></style>
