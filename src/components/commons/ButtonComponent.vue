<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  block?: boolean
  type?: string
  id?: string | null
  size?: string
  class: string
  routerLink?: string
  href?: string
  disabled?: boolean
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  block: false,
  type: 'primary',
  id: null,
  size: 'medium',
  class: '',
  routerLink: '',
  href: '',
  disabled: false,
  cities: ['Lille', 'Paris', 'Lyon'],
  buttonText: "Rejoindre l'aventure",
})

const router = useRouter()

function onClick() {
  if (props.routerLink != '') {
    router.push(props.routerLink)
    window.scrollTo(0, 0)
  }
  if (props.href != '') {
    const newWindow = window.open()
    if (newWindow) newWindow.location.href = props.href
  }
}

const classes = computed(
  () =>
    `t-button t-button--${props.type} t-button--${props.size} ${props.class}`,
)
</script>

<template>
  <button :class="classes" @click="onClick()">
    <slot></slot>
  </button>
</template>

<style lang="scss">
@use '@/assets/css/variables';

.t-button {
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  font-weight: bolder;
  border-radius: 10px;

  .inherit-styles {
    all: inherit;
    padding: 0px;
    margin: 0px;
  }

  &--block {
    width: 100%;
  }

  &--lighter {
    text-transform: none;
    font-weight: normal;
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
