<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
    <WorldCounter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { WorldCounter } from '@libs/world-lib'

@Component({
  components: {
    WorldCounter
  }
})
export default class HelloCounter extends Vue {
  count = 0
  increment(): void {
    this.count++
  }

  decrement(): void {
    this.count--
  }
}
</script>
