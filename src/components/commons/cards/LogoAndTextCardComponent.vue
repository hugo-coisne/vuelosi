<script setup lang="ts">
const { image = { filename: 'filename' }, text = '' } = defineProps<{
  image: { filename: string; alt?: string }
  text: string
}>()
</script>

<template>
  <div>
    <img :src="image.filename" :alt="image.alt" width="114px" />
    <div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/card';

div {
  padding: 1rem;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;

  img {
    padding: 2rem;
  }

  p {
    padding: 0px;
  }
}

@media screen and (max-width: 991px) {
  div {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: auto;
    grid-row: auto;

    img,
    h1 {
      align-self: center;
      justify-self: center;
    }

    img {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }
}
</style>
