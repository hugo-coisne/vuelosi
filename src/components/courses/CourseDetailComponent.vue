<script setup lang="ts">
import type { Training } from '@/model/training'
import ButtonComponent from '../commons/ButtonComponent.vue';
import CourseDetailItemComponent from './CourseDetailItemComponent.vue';

defineProps<{
  training: Training
}>()
</script>

<template>
  <div id="training-detail">
    <div v-if="training">
      <CourseDetailItemComponent
        :title="'Participants'"
        icon="ico-bullseye ico-bullseye--medium"
      >
        <ul>
          <li v-for="trainee of training.trainee">
            {{ trainee }}
          </li>
        </ul>
      </CourseDetailItemComponent>

      <div class="separator"></div>

      <CourseDetailItemComponent
        :title="'Prérequis'"
        icon="ico-data-storage ico-data-storage--medium"
      >
        <ul>
          <li v-for="prerequisite of training.prerequisite">
            {{ prerequisite }}
          </li>
        </ul>
      </CourseDetailItemComponent>

      <div class="separator"></div>

      <CourseDetailItemComponent
        :title="'Durée'"
        icon="ico-clock ico-clock--medium"
      >
        <p>{{ training.duration }}</p>
      </CourseDetailItemComponent>

      <div class="separator"></div>

      <CourseDetailItemComponent
        :title="'Tarif'"
        icon="ico-price-tag ico-price-tag--medium"
      >
        <p>{{ training.price }} € HT</p>
      </CourseDetailItemComponent>

      <div class="separator"></div>

      <CourseDetailItemComponent
        :title="'Format possible'"
        icon="ico-location ico-location--medium"
      >
        <ul>
          <li v-for="location of training.location">
            {{ location }}
          </li>
        </ul>
      </CourseDetailItemComponent>

      <div class="separator sessions-detail"></div>

      <CourseDetailItemComponent
        class="sessions-detail"
        :title="'Prochaines sessions'"
        icon="ico-sessions ico-sessions--medium"
      >
        <ul v-if="training.sessions.length > 0">
          <li v-for="session of training.sessions">
            {{ session }}
          </li>
        </ul>
        <ButtonComponent
          id="intra-contact"
          :routerLink="'/contact'"
          type="secondary"
          class="t-button--lighter"
          >Pour planifier une session<br />
          (inter, intra ou sur mesure)
        </ButtonComponent>
      </CourseDetailItemComponent>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/css/variables";

#training-detail {

  background: variables.$light-grey;
  border-radius: 30px;

  ul {
    padding-left: 0;

    li {
      list-style-type: none;
    }
  }

  .separator {
    border: 1px solid white;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}

.star {
  font-size: 30px;
  color: lightgray;
  position: relative;
  display: inline-block;
}

.star.filled {
  color: gold;
}

.star.half-filled::before {
  content: '\2605';
  color: gold;
  position: absolute;
  left: 0;
  width: 50%;
  overflow: hidden;
}

@media print {
  .sessions-detail{
    display: none;
  }
}
</style>
