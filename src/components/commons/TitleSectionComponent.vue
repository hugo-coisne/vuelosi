<script setup lang="ts">
  interface Props {
    subtitle?: string
    title?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    subtitle: "",
    title: "The main title"
  })
</script>

<template>
<div class="title-section gs_reveal gs_reveal_fromLeft">
  <span>{{ props.subtitle }}</span>
  <h2>{{ props.title }}</h2>
</div>


</template>

<style lang="scss">
@use "@/assets/css/variables";
@use "@/assets/css/underline";

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
