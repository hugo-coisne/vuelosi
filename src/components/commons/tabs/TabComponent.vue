<script setup lang="ts">
defineProps<{ index: number; size: number; tab: any }>()
function getPrefix(tab: any) {
  return !tab.active ? 'in' : ''
}
</script>

<template>
  <div :class="`${getPrefix(tab)}activeTab`" @click="$emit('select')">
    <div
      class="header"
      :style="{ 'grid-area': '1 / ' + index + ' / 2 / ' + (index + 1) }"
    >
      <h2>{{ tab.title }}</h2>
      <div class="separator"></div>
    </div>
  </div>
  <div
    :class="`${getPrefix(tab)}activeContent`"
    :style="{ 'grid-area': '2 / 1 / 3 / ' + (size + 1) }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';

.activeTab {
  h2 {
    color: variables.$blue;
  }

  .separator {
    border: 2px solid variables.$yellow;
  }
}

.inactiveTab {
  h2 {
    color: black;
  }

  .separator {
    border: 2px solid variables.$light-grey;
  }
}

.activeContent {
  display: block;
}

.inactiveContent {
  display: none;
}

@media print {
  .inactiveTab {
    -webkit-region-break-before: always;
    break-before: always;
    padding-top: 2rem;

    h2 {
      color: variables.$blue;
    }

    .separator {
      border: 2px solid variables.$yellow;
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .inactiveContent {
    display: block;
  }
}
</style>
