<template>
  <nav
    class="hidden md:flex fixed z-[500] flex-row items-center justify-evenly w-full h-32 bg-primary-pink font-bold text-xl text-primary-purple"
  >
    <a @click="(e) => handleNavLinkClick(e, '#WB')" class="text-5xl font-black" href="/">WB</a>
    <div class="flex">
      <li class="list-none mx-8">
        <a class="font-bold" @click="(e) => handleNavLinkClick(e, '#ME')" href="#ME">ME</a>
      </li>
      <!-- <li class="list-none mx-8 hover:text-text-secundary-500">
        <a class="font-bold" :on-click="handleNavLinkClick" href="#SKILLS">SKILLS</a>
      </li> -->
      <li class="list-none mx-8 hover:text-text-secundary-500">
        <a class="font-bold" @click="(e) => handleNavLinkClick(e, '#PROJECTS')" href="#PROJECTS"
          >PROJECTS</a
        >
      </li>
      <li class="list-none mx-8 hover:text-text-secundary-500">
        <a class="font-bold" @click="(e) => handleNavLinkClick(e, '#CONTACT')" href="#CONTACT"
          >CONTACT</a
        >
      </li>
    </div>
    <li class="list-none">
      <a
        href="/docs/WB-Resume.pdf"
        download
        class="flex font-bold gap-2 px-8 py-4 bg-tertiary-purple rounded-xl"
      >
        <Download />
        Resume
      </a>
    </li>
  </nav>
  <nav
    :class="{
      'fixed z-[500] md:hidden w-screen h-20 pt-5 md:h-32 bg-primary-pink font-bold text-xl flex items-center  flex-col text-primary-purple': true
    }"
  >
    <div class="flex justify-between items-center w-full">
      <a @click="(e) => handleNavLinkClick(e, '#WB')" class="text-5xl font-black ml-4" href="/"
        >WB</a
      >
      <Menu @click="toggleMobileMenu" class="text-primary-purple mr-4 w-10 h-10 cursor-pointer" />
    </div>
    <div
      :class="{ hidden: !isMobileMenuOpen, 'flex flex-col items-center': true }"
      class="md:flex md:flex-row md:items-center bg-primary-pink pb-5 w-full"
    >
      <li class="list-none mx-8 mt-5 md:m-0">
        <a class="font-bold" @click="(e) => handleNavLinkClick(e, '#ME')" href="#ME">ME</a>
      </li>
      <!-- <li class="list-none mx-8 hover:text-text-secundary-500">
        <a class="font-bold" :on-click="handleNavLinkClick" href="#SKILLS">SKILLS</a>
      </li> -->
      <li class="list-none mx-8 hover:text-text-secundary-500">
        <a class="font-bold" @click="(e) => handleNavLinkClick(e, '#PROJECTS')" href="#PROJECTS"
          >PROJECTS</a
        >
      </li>
      <li class="list-none mx-8 hover:text-text-secundary-500">
        <a class="font-bold" @click="(e) => handleNavLinkClick(e, '#CONTACT')" href="#CONTACT"
          >CONTACT</a
        >
      </li>
      <li class="list-none md:m-0 mt-10">
        <a
          href="/docs/WB-Resume.pdf"
          download
          class="flex font-bold gap-2 px-8 py-4 bg-tertiary-purple rounded-xl"
        >
          <Download />
          Resume
        </a>
      </li>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Download, Menu } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleNavLinkClick = (event: { preventDefault: () => void }, targetId: any) => {
  event.preventDefault()
  const targetElement = document.querySelector(targetId)

  if (targetElement) {
    var yOffset = -100 // Adjust this value to your preference
    if (targetElement.id == 'WB') {
      yOffset = -100 // Adjust this value to your preference
    }
    if (targetElement.id == 'ME') {
      yOffset = -50 // Adjust this value to your preference
    }
    if (targetElement.id == 'SKILLS') {
      yOffset = -150 // Adjust this value to your preference
    }
    if (targetElement.id == 'PROJECTS') {
      yOffset = -128 // Adjust this value to your preference
    }
    if (targetElement.id == 'CONTACT') {
      yOffset = -100 // Adjust this value to your preference
    }
    const yCoordinate = targetElement.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' })
  }
}
</script>

<style scoped></style>
