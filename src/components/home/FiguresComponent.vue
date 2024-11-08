<script setup lang="ts">
import CardListComponent from '@/components/commons/cards/CardListComponent.vue'
import StatsCardComponent from '@/components/commons/cards/StatsCardComponent.vue'
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'

const {
  figures = [
    {
      stat: 25,
      context: 'Talosiens',
    },
    {
      stat: 15,
      context: 'Associés',
    },
    {
      stat: 100,
      context: '% de satisfaction des Talosiens',
    },
    {
      stat: 26,
      context: 'Partenaires',
    },
    {
      stat: 1067,
      context: 'heures de formation',
    },
  ],
} = defineProps<{
  figures?: { stat: number; context: string }[]
  webTitle: string
  mobileTitle: string
}>()
</script>

<template>
  <section id="statistics">
    <div>
      <div class="container">
        <TitleSectionComponent :title="webTitle" class="webTitle" />
        <TitleSectionComponent :title="mobileTitle" class="mobileTitle" />
        <CardListComponent :component-count="figures.length">
          <StatsCardComponent
            v-for="figure in figures"
            :stat="figure.stat"
            :context="figure.context"
          />
        </CardListComponent>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.list {
  display: flex;
  justify-content: space-evenly !important;
}

@media screen and (max-width: 550px) {
  .webTitle {
    display: none;
  }
  .mobileTitle {
    display: flex;
  }
}

@media screen and (min-width: 551px) {
  .webTitle {
    display: flex;
  }
  .mobileTitle {
    display: none;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
