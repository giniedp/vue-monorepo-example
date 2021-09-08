<template>
  <div>
    World
    <button v-on:click="decrement">-</button>
    {{ counter.value }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Counter } from '@libs/ts-lib'

@Component
export default class WorldCounter extends Vue {
  counter = new Counter(0)
  increment(): void {
    this.counter.increment()
  }

  decrement(): void {
    this.counter.decrement()
  }
}
</script>
