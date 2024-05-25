<template>
  <div v-for="(project, number) in projects" :key="project.id">
    <div
      v-motion="{
        initial: { opacity: 0, x: number % 2 === 0 ? -100 : 100 },
        visibleOnce: {
          opacity: 1,
          x: 0,
          transition: { duration: 200, delay: 100 * number, ease: 'easeOut' }
        }
      }"
      class="mb-24 flex w-full justify-center gap-10 flex-col-reverse md:flex-row md:items-center"
      :class="project.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <a
        class="drop-shadow-xl w-[450px]"
        target="_blank"
        :href="project.external ?? project.github"
      >
        <img :src="project.image" :alt="project.imageAlt" aspect-ratio="16/9" class="rounded-md" />
      </a>
      <div
        class="flex max-w-xl basis-1/2 flex-col"
        :class="project.id % 2 === 0 ? 'md:items-start' : 'md:items-end'"
      >
        <div
          class="-m-4 w-full relative rounded-md bg-secondary-purple/10 px-6 py-4 shadow-md"
          :class="project.id % 2 === 0 ? 'md:text-left' : 'md:text-right'"
        >
          <p class="font-mono text-primary-purple">
            {{ project.category }}
          </p>
          <h3
            class="mb-2 text-2xl font-bold text-secondary-purple"
            :class="project.id % 2 === 0 ? 'md:text-left' : 'md:text-right'"
          >
            {{ project.title }}
            <TechnologiesComponent
              :technologies="project.technologies"
              :text-alignment="project.id % 2 === 0 ? 'text-left' : 'text-right'"
            />
          </h3>

          <div
            class="absolute top-4 flex justify-end gap-4"
            :class="project.id % 2 === 0 ? 'right-6' : 'left-6'"
          >
            <a
              v-if="project.github"
              :href="project.github"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <span className="sr-only">GitHub</span>
              <Github
                stroke="#9a208c"
                className="h-6 w-6 stroke-secondary-purple sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
            <a
              v-if="project.external"
              :href="project.external"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <span className="sr-only">Externam</span>
              <Server
                stroke="#9a208c"
                className="h-6 w-6 stroke-secondary-purple sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github, Server } from 'lucide-vue-next'
import TechnologiesComponent from './TechnologiesComponent.vue'
interface ITopProject {
  id: number
  category: string
  title: string
  description: string
  technologies: string
  github?: string
  image: string
  imageAlt: string
  external?: string
}
const projects: ITopProject[] = [
  {
    id: 1,
    category: 'Project 1',
    title: 'ShareCar',
    description:
      "ShareCar is an additional module for your car that reads data from the CAN-bus using an ELM327 module connected to a Raspberry Pi. This data is displayed on a user-friendly website. The system activates through an RFID module, identifying the driver and displaying their name on an LCD screen. The LCD also shows the IP address of the website when a button is pressed. It features an accelerometer to detect movement and a temperature sensor for the car's internal temperature. Additionally, a LED strip under the steering wheel changes color based on economical driving. The housing for all components is crafted using a laser cutter.",
    technologies: 'HTML, CSS, Javascript, Python, Raspberry Pi, Apache ',
    github: 'https://github.com/howest-mct/2021-2022-projectone-WoutBl',
    image: '/Projects/ShareCar.webp',
    imageAlt: 'ShareCarProjectImage'
  },
  {
    id: 2,
    category: 'Industry Project',
    title: '50 jaar E17',
    description:
      "Join us on an exciting journey at the '50 jaar E17' Expo by Leiedal. Our project empowers visitors to envision the future of E17 using AI-altered images. Imagine the highway transformed into a utopian paradise, a bustling dystopian metropolis, a serene desert, or a dynamic waterworld. Visitors can select a tag on a tablet and watch their vision unfold through AI-generated imagery. This interactive experience encourages you to explore various futures for the E17, stimulating imagination and critical thinking. Join us and see your vision of the future come to life with just a tap.",
    technologies: 'NextJS, Typescript, TSX, CSS, TailwindCSS  ',
    github: 'https://github.com/Jinlei2000/MCT-Industry-E17',
    external: 'https://mct-industry-project-e17.vercel.app/',
    image: '/Projects/IndustryProject.webp',
    imageAlt: 'IndustryProjectImage'
  },
  {
    id: 3,
    category: 'Research Project',
    title: 'Detective Oink',
    description:
      'Immerse yourself in a thrilling detective game where you must solve a murder by interacting with AI-powered NPCs. In this game, you play as a detective, piecing together clues and interrogating characters who are brought to life by Inworld AI. Each NPC has its own unique personality and secrets, making every conversation a critical part of the investigation. Your deductive skills and strategic questioning will determine if you can uncover the truth. Dive into this captivating mystery and experience the future of interactive storytelling.',
    technologies: 'REACT, Javascript, TailwindCSS, InworldAI, Spline ',
    github: 'https://github.com/WoutBl/MurderMysteryGame',
    external: 'https://murder-mystery-game-sigma.vercel.app/',
    image: '/Projects/DetectiveOink.png',
    imageAlt: 'DetectiveOinkImage'
  },
  {
    id: 4,
    category: 'Fullstack Project',
    title: 'Brussels Airport',
    description:
      "For our full stack project, we developed a comprehensive back-office website for Brussels Airport. This platform allows you to efficiently schedule crew for specific flights, monitor the status of planes, and send out alerts to staff members. With its user-friendly interface, managing airport operations becomes seamless and organized. Our website ensures that all critical information is accessible, helping improve coordination and communication among the airport's workforce. Enhance the efficiency of Brussels Airport operations with our innovative back-office solution.",
    technologies:
      'VueJS, Typescript, TailwindCSS, NestJS, Docker, GraphQL, PWA, MongoDB, Firebase, Jest, Playwright, GoogleAPI ',
    github: 'https://github.com/DeschuytterBjarni/Wout-Bjarni',
    image: '/Projects/ShareCar.webp',
    imageAlt: 'ShareCarProjectImage'
  },
  {
    id: 5,
    category: 'Freelance Project',
    title: '123Spanje',
    description:
      'Discover your perfect getaway with my website, where you can book two beautiful apartments in Punta Prima, Spain. Each apartment offers stunning views, modern amenities, and a comfortable stay for your vacation. Browse through detailed descriptions, high-quality photos, and availability calendars to easily find the perfect dates for your stay. Our user-friendly booking system ensures a seamless experience from start to finish. Enjoy the beauty of Punta Prima and make unforgettable memories in our charming Spanish apartments.',
    technologies: 'VueJS, Typescript, TailwindCSS, Firebase, GoogleAPI',
    external: 'https://123spanje.com/',
    image: '/Projects/123Spanje.png',
    imageAlt: '123SpanjeImage'
  }
]
</script>

<style scoped></style>
