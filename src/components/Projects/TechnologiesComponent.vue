<template>
  <p class="rounded-lg py-2 font-mono text-sm text-primary-purple/30">
    {{ technologies }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  technologies: {
    type: String,
    required: true
  },
  textAlignment: {
    type: String,
    required: false,
    default: 'text-left'
  }
})
</script>
