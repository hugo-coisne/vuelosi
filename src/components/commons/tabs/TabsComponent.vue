<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  tabs: any[]
  size: number
}>()

// ${!tab.active ? 'in' : ''}
</script>

<template>
  <template v-for="(tab, index) of tabs">
    <div
      :class="`activeTab`"
      @click="$emit('select', index)"
    >
      <div
        class="header"
        :style="{ 'grid-area': '1 / ' + index + ' / 2 / ' + (index + 1) }"
      >
        <h2>{{ tab.title }}</h2>
        <div class="separator"></div>
      </div>
    </div>
    <div
      :class="`${!tab.active ? 'in' : ''}activeContent`"
      :style="{ 'grid-area': '2 / 1 / 3 / ' + (size + 1) }"
    ></div>
  </template>
  <!-- <slot /> -->
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';

.tabs {
  display: grid;
  grid-template-rows: repeat(2, auto);

  h2 {
    font-size: 20px;
  }

  .header:hover {
    cursor: pointer;
  }

  .separator {
    border: 2px solid variables.$yellow;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

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
}

@include media.mobile {
  .tabs {
    display: block;
    height: auto;
  }
}

@media print {
  .tabs {
    display: block;
    height: auto;

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
}
</style>
