<script setup lang="ts">
const {
  button = '',
  url = '',
  className = '',
  type = 'primary',
  size = 'medium',
} = defineProps<{
  button?: string
  className?: string
  type?: string
  size?: string
  url?: string
}>()
function getClasses() {
  if (button == 'button') {
    return `t-button t-button--${type} t-button--${size} ${className}`
  }
  return `${className}`
}
</script>

<template>
  <RouterLink :to="url" :class="getClasses()"><slot /></RouterLink>
</template>

<style lang="scss">
@use '@/assets/css/variables';

a {
  color: variables.$blue;
}

a:hover {
  color: variables.$blue-50;
  cursor: pointer;
  text-decoration: underline;
}

.t-button {
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  font-weight: bolder;
  border-radius: 10px;
  margin-bottom: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
  .inherit-styles {
    all: inherit;
    padding: 0px;
    margin: 0px;
  }

  &--block {
    width: 100%;
  }

  &--primary {
    color: white;
    background-color: variables.$blue;

    &:hover {
      background-color: variables.$dark-blue;
      color: variables.$yellow;
    }
  }
  &:disabled {
    background-color: variables.$light-grey;
    border: 1px solid grey;
    color: grey;
    cursor: not-allowed;

    &:hover {
      background-color: variables.$light-grey;
      color: grey;
      border: 1px solid grey;
    }
  }

  &--secondary {
    color: variables.$dark-blue;
    border: 1px solid variables.$yellow;
    background-color: variables.$yellow;
    &:hover {
      opacity: 0.7;
      //background-color: variables.$light-yellow;
      //color: variables.$blue;
    }
  }

  &--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &--large {
    font-size: 16px;
    padding: 20px 50px;
    border-radius: 10px;
  }
  &--rounded-large {
    font-size: 16px;
    padding: 20px 50px;
    border-radius: 50px;
  }
}
</style>
