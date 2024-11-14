<script setup lang="ts">
const { fullScreen = false, open = false } = defineProps<{
  fullScreen?: boolean
  open?: boolean
}>()
</script>

<template>
  <div :class="'t-modal ' + (fullScreen ? 'fullScreen ' : ' ')">
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';
.t-modal {
  background-color: white;
  padding: 1rem;
  &.fullScreen {
    position: fixed;
    top: 100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    transition-duration: 0.5s;
    display: grid;
    &.active {
      position: fixed;
      top: 0;
      transition-duration: 0.5s;
    }
    .footer {
      align-self: end;
    }
  }
}

@include media.mobile {
  .t-modal {
    background-color: variables.$light-grey;
    h3 {
      color: variables.$dark-blue;
      font-weight: bold;
    }
  }
}
</style>
