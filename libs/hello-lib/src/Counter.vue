<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Counter extends Vue {
  count = 0
  increment(): void {
    this.count++
  }

  decrement(): void {
    this.count--
  }
}
</script>
