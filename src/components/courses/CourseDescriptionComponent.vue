<script setup lang="ts">
import type { Training } from '@/model/training'

defineProps<{ training: Training }>()
</script>

<template>
  <div class="description">
    <div class="content" v-if="training">
      <div>
        <p>{{ training.description }}</p>
      </div>

      <div>
        <h2>Objectifs</h2>
        <ul>
          <li v-for="objective of training.objectives">{{ objective }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';

.description {
  h2 {
    color: variables.$dark-blue;
  }
}

@media print {
  .description .content {
    display: grid;
    page-break-inside: avoid;
  }
}
</style>
