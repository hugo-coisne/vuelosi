<script setup lang="ts">
import IntroComponent from '@/components/home/IntroComponent.vue'
</script>

<template>
  <IntroComponent />
</template>

<style lang="scss">
@use '@/assets/css/variables';

@media print {
  .typeform-page {
    display: none;
  }
}
</style>
