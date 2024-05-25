<script setup lang="ts">
import WBComponent from '@/components/WBComponent.vue'
import MeComponent from './../components/MeComponent.vue'
import ContactComponent from './../components/ContactComponent.vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <main>
    <WBComponent />
    <div class="bg-secondary-pink h-full mx-20 rounded-3xl">
      <MeComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
    <FooterComponent />
  </main>
</template>
