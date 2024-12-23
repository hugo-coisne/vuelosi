<script setup lang="ts">
const { title = 'Default title', icon = '' } = defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <div class="detail">
    <div class="detail-img">
      <i :class="icon"></i>
    </div>
    <div class="detail-text">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/css/variables";

.detail {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(1, auto);
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.85rem;

  .detail-img {
    padding: 1.5rem 1rem 1.5rem 1.5rem;
    justify-self: end;

  }

  .detail-text {
    padding-top: 1rem;
    padding-right: 1rem;
    justify-self: start;

    h2 {
      font-size: 20px;
    }
  }
}

@media print{
  .detail {
    padding-top: 0.5px;
    padding-bottom: 0.5px;
  }
}
</style>
