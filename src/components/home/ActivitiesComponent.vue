<script setup lang="ts">
import { onMounted } from 'vue'
import ActivityCardComponent from '../commons/cards/ActivityCardComponent.vue'
import CardListComponent from '../commons/cards/CardListComponent.vue'
import TitleSectionComponent from '../commons/TitleSectionComponent.vue'
import gsap from 'gsap'
const {
  title = "NOS SECTEURS D'ACTIVITÉS",
  subtitle = 'Qui accompagnons nous ?',
  blocks = [
    { title: 'Retail', image: { filename: 'distrib.svg', alt: '' } },
    { title: 'Start-up', image: { filename: 'startup.svg', alt: '' } },
    { title: 'Industrie', image: { filename: 'industry.svg', alt: '' } },
    { title: 'Banque et assurance', image: { filename: 'bank.svg', alt: '' } },
  ],
} = defineProps<{
  title?: string
  subtitle?: string
  blocks?: { title: string; image: { filename: string; alt: string } }[]
}>()

function animateBoxes(): void {
  gsap.utils.toArray('#activities .card-container').forEach((box, index) => {
    const boxElement = box as HTMLElement
    gsap.from(boxElement, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: boxElement,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
      delay: index * 0.1,
    })
  })
}
onMounted(() => animateBoxes())
</script>

<template>
  <section id="activities">
    <div class="container">
      <TitleSectionComponent :subtitle="subtitle" :title="title" />
      <CardListComponent :componentCount="blocks.length">
        <ActivityCardComponent
          v-for="card of blocks"
          :title="card.title"
          :image="card.image"
        />
      </CardListComponent>
    </div>
  </section>
</template>

<style lang="scss">
.cards-container .card-list > * .card .card-body hr {
  color: #fad922;
  width: 40%;
  height: 5px;
  opacity: 1;
  margin: 1rem auto;
  border-radius: 5px;
}
</style>
