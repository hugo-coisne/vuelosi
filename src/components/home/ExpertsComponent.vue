<script setup lang="ts">
import ExpertCardComponent from '@/components/commons/cards/ExpertCardComponent.vue'
import CardListComponent from '@/components/commons/cards/CardListComponent.vue'
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'
import { onMounted } from 'vue'

const {
  title = '',
  subtitle = '',
  cards = [
    {
      image: 'src/assets/svg/expertises/dev2.svg',
      title: 'Développement',
      content:
        "Java, python, ou js ne sont pas nos langues maternelles mais presque. Développer c'est plus que notre métier, c'est notre passion !",
    },
    {
      image: 'src/assets/svg/expertises/bigdata.svg',
      title: 'Big Data',
      content:
        "La captation, le stockage et la redistribution des données c'est notre dada, Spark, Kafka, Mongo ou tout autre système distribué sont dans nos cordes.",
    },
    {
      image: 'src/assets/svg/expertises/crog.svg',
      title: 'DevOps',
      content:
        "Pusher c'est livré ! Une chaine d'intégration continue automatisée qui garantit la qualité du delivery. Venez découvrir comment on fait ça sans stress !",
    },
    {
      image: 'src/assets/svg/expertises/project_managment.svg',
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

function animateBoxes(): void {
  if (typeof window !== 'undefined') return
  gsap.utils.toArray('#experts app-expert-card').forEach((box, index) => {
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
  <section id="experts">
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
        src="@/assets/svg/tillsets/fresque.svg"
        class="fresque left"
        alt="fresque"
      />
    </div>
  </section>
</template>

<style lang="scss">
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
