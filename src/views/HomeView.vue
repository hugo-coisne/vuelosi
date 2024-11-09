<script setup lang="ts">
import ExpertsComponent from '@/components/home/ExpertsComponent.vue'
import FiguresComponent from '@/components/home/FiguresComponent.vue'
import IntroComponent from '@/components/home/IntroComponent.vue'
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
</template>

<style lang="scss">
@use '@/assets/css/variables';

@media print {
  .typeform-page {
    display: none;
  }
}
</style>
