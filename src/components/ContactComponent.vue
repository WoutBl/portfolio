<template>
  <section id="CONTACT" className=" mb-8 flex justify-center items-center">
    <div className=" mb-56 mt-16 font-bold text-4xl">
      <div className="grid grid-flow-col gap-4 items-center">
        <a
          href="mailto:wout.blomme@hotmail.com"
          className="rounded-own-sm  p-2 ring-2 ring-secondary-purple hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-tertiary-purple dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
        >
          <span className="sr-only">Email</span>
          <Mail
            stroke="#9a208c"
            className="h-6 w-6 stroke-secondary-purple sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/wout-blomme-aa8754277/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-own-sm  p-2 ring-2 ring-secondary-purple hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-tertiary-purple dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin
            stroke="#9a208c"
            className="h-6 w-6 stroke-secondary-purple sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
        </a>
        <a
          href="https://github.com/WoutBl"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-own-sm  p-2 ring-2 ring-secondary-purple hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-tertiary-purple dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
        >
          <span className="sr-only">GitHub</span>
          <Github
            stroke="#9a208c"
            className="h-6 w-6 stroke-secondary-purple sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
        </a>
        <div className="text-secondary-purple ml-40">Contact Me</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Linkedin, Github } from 'lucide-vue-next'
</script>

<style scoped></style>
