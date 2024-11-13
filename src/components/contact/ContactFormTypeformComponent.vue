<script setup lang="ts">
import { useParallaxEffect } from '@/composables/paralax'
import { onMounted } from 'vue'

const { formType = 'general' } = defineProps<{ formType: string }>()
onMounted(() => useParallaxEffect().init())
</script>

<template>
  <!-- General -->
  <div class="contact-form-typeform" v-if="formType === 'general'">
    <div data-tf-live="01HQ66XRPNHTCSE8P0TS56P86A"></div>
  </div>
  <!-- Contact -->
  <div class="contact-form-typeform" v-if="formType === 'contact'">
    <div data-tf-live="01HQ66QZ3NYYM838QW9S52YYX7"></div>
  </div>
  <!-- Candidature -->
  <div class="contact-form-typeform" v-if="formType === 'candidature'">
    <div data-tf-live="01HQ673HEZH2SD5QH43BCKSP1K"></div>
  </div>
  <!-- Formation -->
  <div class="contact-form-typeform" v-if="formType === 'formation'">
    <div data-tf-live="01HQ67M99M0X1GZZH5RGZ6YX79"></div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';

@media print {
  .contact-form-typeform {
    display: none !important;
  }
}
</style>
