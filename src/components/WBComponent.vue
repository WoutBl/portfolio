<template>
  <section id="WB" className="flex items-center justify-center h-screen ">
    <div className="flex flex-col items-center text-primary-purple">
      <div className="font-regular typewriter text-3xl md:text-6xl mb-8">
        <h1>I'm Wout Blomme</h1>
      </div>
      <div className="font-extrabold text-2xl md:text-5xl">A Full Stack Web Developer</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped>
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 1.5s steps(15, end);
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
