<script setup lang="ts">
import type { Training } from '@/model/training'
import ContactFormTypeformComponent from '../contact/ContactFormTypeformComponent.vue'
import TabsComponent from '../commons/tabs/TabsComponent.vue'
import TabComponent from '../commons/tabs/TabComponent.vue'
import CourseDescriptionComponent from './CourseDescriptionComponent.vue'
import CoursePlanComponent from './CoursePlanComponent.vue'

const props = defineProps<{ training: Training }>()

const tabs = [
  {
    component: CourseDescriptionComponent,
    title: 'La description',
    training: props.training,
    active: true,
    size: 1,
  },
  {
    component: CoursePlanComponent,
    title: 'Le programme',
    classes: 'training-plan-MOI',
    active: false,
    content: props.training.plan,
    size: 1,
  },
]

function selectHandler(index: number) {
  console.log(tabs[index])
  tabs.forEach(element => {
    element.active = false
  })
  tabs[index].active = true
  console.log(tabs[index])
}
</script>

<template>
  <div id="description">
    <div v-if="training">
      <TabsComponent :tabs="tabs" :size="tabs[0].size" @select="selectHandler">
        <TabComponent
          v-for="(tab, index) of tabs"
          :index="index"
          :size="tab.size"
          :tab="tab"
        >
          <component
            :is="tab.component"
            :training="training"
            :content="training.plan"
          />
        </TabComponent>
      </TabsComponent>

      <div class="final-separator" />
      <div id="contact-us-training">
        <ContactFormTypeformComponent formType="formation" />
      </div>
      <div id="training-others">
        <RouterLink :to="'/'"
          ><i class="ico-open-book ico-open-book--button"></i> Voir les autres
          formations Talosi</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';

#description {
  z-index: 3;
}
.final-separator {
  border: 1px solid variables.$light-grey;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

#training-others {
  display: none;
  margin-top: 1rem;
  text-decoration: none;

  img {
    margin-right: 0.5rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
}

#training-tabs > div > div > training-plan > div {
  background-color: red;
}

#contact-us-training {
  text-align: center;
}

@media print {
  #training-description {
    page-break-after: left;
  }
  .final-separator,
  #contact-us,
  #contact-us-training {
    display: none;
  }
}
</style>
