<script setup lang="ts">
import type { Training } from '@/model/training'
import BraceComponent from '../commons/BraceComponent.vue'
import { ref } from 'vue';

defineProps<{
  training: Training
}>()

function getStarArray(grade: number) {
  console.log(grade, grade % 1)
  }
const starArray = ref([1,1,1,1,.5])
</script>

<template>
  <BraceComponent>
    <div class="content" v-if="training">
      <h3>Formation</h3>
      <div class="title-image-container">
        <div class="circle">
          <img
            :src="training.picture"
            class="img-training-techno"
            alt="Img Post"
          />
        </div>
        <h1>{{ training.title }}</h1>
      </div>

      <ul>
        <li v-for="tag of training.hashtag">#{{ tag }}</li>
      </ul>
      <div class="star-rating" v-if="training.feedbacks != 0">
        <template v-for="star of starArray">
          <span
            class="star"
            :class="{ filled: star === 1, 'half-filled': star === 0.5 }"
            >&#9733;</span
          >
        </template>
        <h2>{{ training.grade }} / 5</h2>
      </div>
    </div>
  </BraceComponent>
</template>

<style lang="scss">
@use '@/assets/css/variables';

.content {
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 3;
  position: relative;
  padding-top: 2rem;

  ul {
    list-style-type: none;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.2em;
    font-weight: 300;
    text-transform: uppercase;
  }

  .star {
    font-size: 35px;
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

  .title-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 5rem;
      margin: 0;
    }
    .circle {
      background-color: white;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: 3px solid white;
      margin-right: 10px;
      display: grid;
      align-items: center;
      overflow: hidden;
      .img-training-techno {
        width: 80%;
        object-fit: cover;
        justify-self: center;
        align-self: center;
      }
    }
  }

  ul {
    padding-left: 1rem;

    li {
      list-style-type: none;
      margin-right: 1rem;
      display: inline;
    }
  }
}

.till {
  position: relative;

  .fresque {
    position: absolute;
    top: -150px;
    max-width: 25%;
    z-index: 2;
    left: -150px;
  }
}

.training-header {
  color: white;
  background: linear-gradient(to right, variables.$dark-blue, variables.$blue);
  border-radius: 2rem;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
  margin-top: 50px;
}

@media print {
  .training-header {
    padding-bottom: 0rem;
  }
  .content {
    page-break-inside: always;
    text-align: center;
    position: relative;

    ul {
      list-style-type: none;
    }
    .title-image-container {
      h1 {
        font-size: 3rem;
      }
      .circle {
        width: 40px;
        height: 40px;
      }
    }
    h3 {
      font-size: 1.5em;
      font-weight: 300;
      text-transform: uppercase;
    }

    ul {
      padding-left: 1rem;

      li {
        list-style-type: none;
        margin-right: 1rem;
        display: inline;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .content {
    ul {
      margin-bottom: 0;
    }
    .star {
      font-size: 20px;
    }
    .title-image-container {
      h1 {
        font-size: 3rem;
      }
      .circle {
        width: 50px;
        height: 50px;
      }
    }
  }
}
@media screen and (max-width: 575px) {
  .content {
    .title-image-container {
      h1 {
        font-size: 2rem;
      }
      .circle {
        width: 40px;
        height: 40px;
      }
    }
    h3 {
      font-size: 1.2em;
    }
  }
}
</style>
