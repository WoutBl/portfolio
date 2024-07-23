<template>
  <section id="ME" className=" md:h-[70vh]  flex flex-col md:flex-row justify-around items-center">
    <div className="z-10  md:ml-40 w-auto">
      <div className="w-[300px] h-[300px] rounded-xl overflow-hidden  ">
        <img
          className="maskedImage "
          src="/ME.png"
          alt="Picture Wout Blomme"
          width="{300}"
          height="{200}"
        />
      </div>
    </div>
    <div
      className="flex flex-col text-secondary-purple items-center mt-5 md:mt-0 md:items-start justify-center md:w-1/2 "
    >
      <div className="mb-10 font-bold text-4xl">This is me.</div>
      <p className="px-5  md:p-0 text-center md:text-start">
        Hi, I am from Maldegem, Belgium. I am a Full Stack Web Developer. I am currently studying at
        Howest University of Applied Sciences in Kortrijk. I am in my second year of the Bachelor
        MCT (Multimedia and Creative Technologies). I am a very motivated and ambitious person who
        is always eager to learn new things and always wants to achieve his goals.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped>
.maskedImageContainer {
  width: 300px;
  height: 300px;
  border-radius: 10px; /* Make the container round */
  overflow: hidden; /* Clip the image to the container's rounded shape */
}
</style>
