<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/commons/NavbarComponent.vue'
import FooterComponent from './components/commons/FooterComponent.vue'
</script>
<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
