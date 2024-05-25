<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationComponent from './components/NavigationComponent.vue'
</script>

<template>
  <header class="fixed z-50">
    <NavigationComponent />
  </header>

  <RouterView />
</template>

<style>
body {
  overflow-x: hidden;
  background-color: var(--color-background-back);
}
</style>
