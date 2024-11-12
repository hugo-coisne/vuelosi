<script setup lang="ts">
import ImgAndTextComponent from '@/components/commons/ImgAndTextComponent.vue'
import ActivitiesComponent from '@/components/home/ActivitiesComponent.vue'
import CitationComponent from '@/components/home/CitationComponent.vue'
import ExpertsComponent from '@/components/home/ExpertsComponent.vue'
import FiguresComponent from '@/components/home/FiguresComponent.vue'
import IntrapreneurComponent from '@/components/home/IntrapreneurComponent.vue'
import IntroComponent from '@/components/home/IntroComponent.vue'
import TalentsComponent from '@/components/home/TalentsComponent.vue'
</script>

<template>
  <IntroComponent />
  <FiguresComponent
    :webTitle="'TALOSI EN QUELQUES CHIFFRES'"
    :mobileTitle="'EN QUELQUES CHIFFRES'"
  />
  <ExpertsComponent
    :title="'NOS EXPERTISES'"
    :subtitle="'Nos talents au service de vos idées'"
  />
  <TalentsComponent />
  <IntrapreneurComponent />
  <ActivitiesComponent />
  <ImgAndTextComponent
    :mode="'dark'"
    :title="'Ici, pas de clients que des partenaires !'"
  />
  <CitationComponent/>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';

@media print {
  .typeform-page {
    display: none;
  }
}
</style>
