<script setup lang="ts">
const {
  subtitle = '',
  title = 'The main title',
  style = '',
} = defineProps<{
  subtitle?: string
  title?: string
  style?: string
}>()
</script>

<template>
  <div class="title-section gs_reveal gs_reveal_fromLeft" :style="style">
    <span>{{ subtitle }}</span>
    <h2>{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/underline';

.title-section {
  margin-bottom: 20px;
  span {
    font-weight: 500;
    text-transform: uppercase;
    color: variables.$dark-blue;
  }
  h1 {
    @include underline.underline;
    font-weight: bold;
    color: variables.$blue;
  }
  h2 {
    @include underline.underline;
    font-weight: bold;
    color: variables.$blue;
  }
}

.hidden-text {
  opacity: 0;
}
</style>
