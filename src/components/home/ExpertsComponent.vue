<script setup lang="ts">
import ExpertCardComponent from '@/components/commons/cards/ExpertCardComponent.vue'
import CardListComponent from '@/components/commons/cards/CardListComponent.vue'
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'
import { onMounted, useTemplateRef } from 'vue'

const {
  title = '',
  subtitle = '',
  cards = [
    {
      image: {filename:'dev2.svg', alt:''},
      title: 'Développement',
      content:
        "Java, python, ou js ne sont pas nos langues maternelles mais presque. Développer c'est plus que notre métier, c'est notre passion !",
    },
    {
      image: {filename:'bigdata.svg', alt:''},
      title: 'Big Data',
      content:
        "La captation, le stockage et la redistribution des données c'est notre dada, Spark, Kafka, Mongo ou tout autre système distribué sont dans nos cordes.",
    },
    {
      image: {filename:'crog.svg', alt:''},
      title: 'DevOps',
      content:
        "Pusher c'est livré ! Une chaine d'intégration continue automatisée qui garantit la qualité du delivery. Venez découvrir comment on fait ça sans stress !",
    },
    {
      image: {filename:'project_managment.svg', alt:''},
      title: 'Pilotage',
      content:
        "On ne parle pas d'avion ici mais bien de pilotage de projet ! Et ce n'est pas parce que l'on ne sait pas mettre la jambe derrière la tête que l'on est pas agile.",
    },
  ],
} = defineProps<{
  title: string
  subtitle: string
  cards?: any[]
}>()

// const experts = useTemplateRef('experts')

function animateBoxes(): void {
  if (typeof window !== 'undefined') return
  gsap.utils.toArray('#experts').forEach((box, index) => {
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
  <section id="experts" ref="experts">
    <div class="container our-experts">
      <TitleSectionComponent
        :subtitle="subtitle"
        :title="title"
      ></TitleSectionComponent>
      <CardListComponent :componentCount="cards.length">
        <ExpertCardComponent
          v-for="card of cards"
          :title="card.title"
          :image="card.image"
          :content="card.content"
        >
        </ExpertCardComponent>
      </CardListComponent>
    </div>
    <div class="till">
      <div class="background-grey"></div>
      <img
        src="/assets/svg/tillsets/fresque.svg"
        class="fresque left"
        alt="fresque"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';

.till {
  .background-grey {
    z-index: -2;
    position: absolute;
    bottom: -75px;
    min-height: 150px;
    width: 100%;
    background-color: variables.$light-grey;
  }
}
</style>
