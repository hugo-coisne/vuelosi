<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref, useTemplateRef } from 'vue'

interface Props {
  context: string
  stat: number
}

const props = defineProps<Props>()

const base = ref(0)
const stats = useTemplateRef('stats')
let tmp = 0

function animateValue(targetValue: number): void {
  gsap.to(stats.value, {
    duration: 2,
    ease: 'linear',
    onUpdate: () => {
      tmp = gsap.utils.interpolate(tmp, targetValue, 0.05)
      base.value = Math.round(tmp)
    },
    onComplete: () => {
      base.value = targetValue
    },
  })
}

onMounted(() => {
  if (stats.value) {
    animateValue(props.stat)
  }
})
</script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="card-infos">
        <h2 ref="stats" class="cardTitle">{{ base }}</h2>
        <div class="context">{{ props.context }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/icons';

.card-infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, variables.$dark-blue, variables.$blue);
  height: 165px;
  border-radius: 15px;
}

.card {
  min-width: 231px !important;
  padding: 0 !important;
  width: auto;
}

.cardTitle {
  color: white;
  text-align: center;
  font-size: xxx-large;
}

.context {
  color: variables.$yellow;
  font-weight: bold;
  text-align: center;
}
</style>
