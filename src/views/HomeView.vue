<script setup lang="ts">
import FiguresComponent from '@/components/home/FiguresComponent.vue'
import IntroComponent from '@/components/home/IntroComponent.vue'
</script>

<template>
  <IntroComponent />
  <FiguresComponent :webTitle="'TALOSI EN QUELQUES CHIFFRES'" :mobileTitle="'EN QUELQUES CHIFFRES'"/>
</template>

<style lang="scss">
@use '@/assets/css/variables';

@media print {
  .typeform-page {
    display: none;
  }
}
</style>
