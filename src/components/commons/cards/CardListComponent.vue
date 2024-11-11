<script setup lang="ts">
import { computeStyles } from '@popperjs/core'
import { computed, ref, useTemplateRef, watch } from 'vue'

const { componentCount = 1, gradientColor = 'white' } = defineProps<{
  componentCount?: number
  gradientColor?: string
}>()

const hiddenSideParts = ref({ left: false, right: false })

function updateSidePartsDisplay() {
  hiddenSideParts.value = { left: hideLeftPart(), right: hideRightPart() }
}

const hoverOnLeft = ref(false)
const hoverOnRight = ref(false)

const cardList = useTemplateRef('list')

const whiteOverlayStyleFactory = (angle: number) =>
  `background: linear-gradient(${angle}deg, ${gradientColor} 0%, transparent 100%)`

const rightOverlayAngle = 270
let rightScroller = -1
const rightOverlayStyle = computed(() =>
  whiteOverlayStyleFactory(rightOverlayAngle),
)

const leftOverlayAngle = 90
let leftScroller = -1
const leftOverlayStyle = computed(() =>
  whiteOverlayStyleFactory(leftOverlayAngle),
)

function scrollLeft(scrollValue: number) {
  cardList.value!.scrollTo({
    left: cardList.value!.scrollLeft + scrollValue,
  })
}

function scrollRight(scrollValue: number) {
  cardList.value!.scrollTo({
    left: cardList.value!.scrollLeft - scrollValue,
  })
}

watch(hoverOnLeft, newVal => {
  if (newVal) {
    rightScroller = setInterval(function () {
      scrollRight(10)
      updateSidePartsDisplay()
    }, 30)
  } else {
    clearInterval(rightScroller)
  }
})

watch(hoverOnRight, newVal => {
  if (newVal) {
    leftScroller = setInterval(function () {
      scrollLeft(10)
      updateSidePartsDisplay()
    }, 30)
  } else {
    clearInterval(leftScroller)
  }
})

function mouseHoverLeft() {
  hoverOnLeft.value = true
}

function mouseClickLeft() {
  scrollRight(296)
}

function mouseHoverRight() {
  hoverOnRight.value = true
}

function mouseClickRight() {
  scrollLeft(296)
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

function hideLeftPart() {
  return cardList.value!.scrollLeft == 0 || isMobileDevice()
}

function hideRightPart() {
  return (
    cardList.value!.scrollLeft ==
      cardList.value!.scrollWidth - cardList.value!.clientWidth ||
    isMobileDevice()
  )
}

watch(cardList, updateSidePartsDisplay)
</script>

<template>
  <div class="cards-container">
    <div class="side-part">
      <div
        @mouseenter="mouseHoverLeft()"
        @click="mouseClickLeft()"
        @mouseleave="hoverOnLeft = false"
        class="left"
        :style="
          leftOverlayStyle + `${hiddenSideParts.left ? ';opacity: 0;' : ''}`
        "
      ></div>
      <div
        @mouseenter="mouseHoverRight()"
        @click="mouseClickRight()"
        @mouseleave="hoverOnRight = false"
        class="right"
        :style="
          rightOverlayStyle + `${hiddenSideParts.right ? ';opacity: 0;' : ''}`
        "
      ></div>
    </div>
    <div
      ref="list"
      class="card-list"
      :style="'grid-template-columns: repeat(' + componentCount + ', 1fr)'"
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
