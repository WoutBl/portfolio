<template>
  <footer className=" px-8  ">
    <div className="mx-auto max-w-screen-xl py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <p
          className="md:text-1xl transform px-1 text-center text-lg text-secondary-purple font-bold dark:text-own-neutral-400 lg:text-3xl"
        >
          WB
        </p>
        <p
          className=" text-center text-sm font-medium text-secondary-purple  md:text-right md:text-base "
        >
          &copy; {{ year }} Wout Blomme - All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const year = new Date().getFullYear()
</script>

<style scoped></style>
