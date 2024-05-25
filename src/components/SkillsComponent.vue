<template>
  <section id="SKILLS" className=" h-[70vh]  flex justify-around items-center">
    <div className="z-10  ml-40 w-auto">
      <div className="maskedImageContainer ">
        <img
          className="maskedImage "
          src="/ME.png"
          alt="Picture Wout Blomme"
          width="{300}"
          height="{200}"
        />
      </div>
    </div>
    <div className="flex flex-col text-secondary-purple items-start justify-center w-1/2 ">
      <div className="mb-10 font-bold text-4xl">This is me.</div>
      <p className="">
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

<style scoped></style>
