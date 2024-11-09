<script setup lang="ts">
const {
  title = 'Default title',
  image = {},
  content = {},
} = defineProps<{
  title?: string
  image?: any
  content?: any
}>()
</script>

<template>
  <div class="card-container">
    <div class="card">
      <img
        src="@/assets/svg/card/header.png"
        class="card-img-top"
        alt="Header Expert Talosi"
        width="300px"
      />
      <img :src="image" :alt="image?.alt" class="img-fluid icon" />

      <div class="card-body">
        <p class="card-title">{{ title }}</p>
        <hr />
        <div class="card-text">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';
@use '@/assets/css/card';

.card {
  img {
    border-radius: 15px;
  }

  .icon {
    position: absolute;
    top: 0;
    max-height: 120px;
    width: 100%;
    margin: auto;
    padding-top: 2.5rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .card-body {
    .card-title {
      text-align: center;
      color: #0033ff;
      font-weight: bolder;
    }
  }
}
</style>
