<script setup lang="ts">
import type { TrainingContent } from '@/model/training-content';

defineProps<{content: TrainingContent[]}>()
</script>

<template>
<div class="plan">
  <div class="content" v-if="content">
    <ul v-for="plan of content" class="tab">

      <h2 v-if="plan.content.length > 0" class="plan-title">{{ plan.title }}</h2>
      <li v-if="plan.content.length == 0">{{ plan.title }}</li>

      <CoursePlanComponent :content="plan.content"/>
    </ul>
  </div>
</div>

</template>

<style lang="scss">
.plan {
  .plan-title {
    font-size: 1.5rem;
  }
}

@media print{
  .plan{
    text-align: left;

    .plan-title{
      text-align: left !important;
    }
  }
}
</style>
