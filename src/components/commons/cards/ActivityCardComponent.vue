<script setup lang="ts">
const {
  title = 'title',
  image = { filename: 'filename', alt: 'card Talosi' },
} = defineProps<{ title: string; image: { filename: string; alt: string } }>()
</script>

<template>
  <div
    class="card-container"
    style="
      translate: none;
      rotate: none;
      scale: none;
      transform: translate(0px, 0px);
      opacity: 1;
    "
  >
    <div class="card">
      <img
        :src="`/assets/svg/activities/${image.filename}`"
        :alt="image?.alt"
        class="card-img-top"
        height="150px"
      />

      <div class="card-body">
        <p class="card-title">{{ title }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/card';

.card {
  img {
    border-radius: 15px;
    max-width: 60%;
    min-height: 150px;
    max-height: 150px;
    margin: auto;
    padding: 3rem 3rem 1rem;
  }

  .card-body {
    .card-title {
      text-align: center;
      color: #0033ff;
      font-weight: bolder;
      font-size: 1.25rem;
    }
  }
}
</style>
