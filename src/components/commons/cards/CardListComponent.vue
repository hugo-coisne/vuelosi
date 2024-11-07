<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const props = defineProps<{
  componentCount: number
}>()

const hoverOnLeft = ref(false)
const hoverOnRight = ref(false)
const cardList = useTemplateRef('list')

function scrollLeft(scrollValue: number) {
  setTimeout(() => {
    let maxScroll = cardList.value!.scrollWidth - cardList.value!.clientWidth
    if (hoverOnRight.value && cardList.value!.scrollLeft < maxScroll) {
      cardList.value!.scrollTo({
        left: cardList.value!.scrollLeft + scrollValue,
      })
    }
  }, 30)
}

function scrollRight(scrollValue: number) {
  setTimeout(() => {
    if (hoverOnLeft.value && cardList.value!.scrollLeft > 0) {
      cardList.value!.scrollTo({
        left: cardList.value!.scrollLeft - scrollValue,
      })
    }
  }, 10)
}

function mouseHoverLeft() {
  hoverOnLeft.value = true
  scrollRight(10)
}

function mouseClickLeft() {
  hoverOnLeft.value = true
  scrollRight(296)
}

function mouseHoverRight() {
  hoverOnRight.value = true
  scrollLeft(10)
}

function mouseClickRight() {
  hoverOnRight.value = true
  scrollLeft(296)
}
</script>

<template>
  <div class="cards-container">
    <div class="side-part">
      <div
        @mouseenter="mouseHoverLeft()"
        @click="mouseClickLeft()"
        @mouseleave="hoverOnLeft = false"
        class="left"
      ></div>
      <div
        @mouseenter="mouseHoverRight()"
        @click="mouseClickRight()"
        @mouseleave="hoverOnRight = false"
        class="right"
      ></div>
    </div>
    <div
      ref="list"
      class="card-list"
      :style="'grid-template-columns: repeat(' + props.componentCount + ', 1fr)'"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';

$padding-cards: 1rem;
$card-width: 296px;
$card-border-radius: 15px;

.cards-container {
  position: relative;
  z-index: 10;
  .card-list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    overflow-y: hidden;
    margin-left: -$padding-cards;
    margin-right: -$padding-cards;
    & > * {
      padding: $padding-cards;
      .card {
        min-width: $card-width;
        max-width: $card-width;
        border-radius: $card-border-radius;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        z-index: 2;
        height: 100%;
        padding: 0 !important;
        .card-body {
          height: 100%;
          h5 {
            text-align: center;
            color: variables.$blue;
            font-weight: bolder;
          }

          hr {
            color: variables.$yellow;
            width: 40%;
            height: 5px;
            opacity: 1;
            margin: 1rem auto;
            border-radius: 5px;
          }
          .card-text {
            text-align: center;
          }
        }
      }
    }
  }

  .left,
  .right {
    position: absolute;
    width: 150px;
    top: $padding-cards;
    height: calc(100% - 2rem);
    z-index: 5;
  }

  .left.hidden,
  .right.hidden {
    display: none;
  }

  .left {
    left: -$padding-cards;
  }
  .right {
    right: -$padding-cards;
  }
}
</style>
