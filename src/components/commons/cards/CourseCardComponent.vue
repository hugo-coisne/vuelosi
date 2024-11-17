<script setup lang="ts">
import type { Training } from '@/model/training'
import LinkComponent from '../LinkComponent.vue'

const {
  training = {
    picture: '/assets/svg/courses/javascript.svg',
    title: 'Javascript',
    hashtag: ['Front', 'Javascript', 'Développement'],
    description:
      "JavaScript est un langage de programmation de script côté client utilisé pour créer des pages web interactives et dynamiques. Il est généralement utilisé en conjonction avec HTML et CSS pour ajouter de la fonctionnalité à des sites web. Il peut être utilisé pour des tâches telles que la validation de formulaire, la création de cookies, l'animation, et la manipulation de contenu en temps réel. Il est également utilisé pour des applications web côté client et peut être exécuté dans un navigateur web ou dans un environnement de serveur tel que Node.js.",
    slug: 'javascript',
  },
} = defineProps<{ training: Training }>()
function makeTagsList(tags: string[]) {
  return tags.map(tag => '#' + tag).join(' ')
}
</script>

<template>
  <div class="card card-training" v-if="training">
    <div class="circle">
      <img :src="training.picture" class="imgCardHeader" alt="Img Post" />
    </div>
    <div class="header">
      <img
        src="/assets/svg/card/header.png"
        class="card-img-top"
        alt="Header Training Talosi"
      />
      <div class="titles">
        <h5 class="card-title formationTitle">{{ training.title }}</h5>
        <h6 class="descriptionActu formationTags">
          {{ makeTagsList(training.hashtag) }}
        </h6>
      </div>
    </div>
    <div class="card-body card-content">
      <p class="card-text card-body-text">{{ training.description }}</p>
      <LinkComponent
        :className="'see-btn'"
        button="button"
        type="secondary"
        size="rounded-large"
        :url="`/organisme-de-formation/${training.slug}`"
        >En savoir +</LinkComponent
      >
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';
@use '@/assets/css/fonts';
@use '@/assets/css/breakpoints';
@use '@/assets/css/underline';
@use '@/assets/css/card';

.card-training {
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  height: 100%;
  border-radius: 20px;
  .circle {
    background-color: white;
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border: 3px solid variables.$blue;
    padding: 1rem;
    display: grid;
    align-items: center;
    .imgCardHeader {
      width: 100%;
      object-fit: contain;
    }
  }

  .header {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    img {
      width: 100%;
      grid-row: 1;
      grid-column: 1;
      border-radius: 20px;
    }
    .titles {
      grid-row: 1;
      grid-column: 1;
      text-align: center;
      justify-content: center;
      align-self: center;
      color: white;
    }
  }
  .card-body {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    text-align: center;
    .see-btn {
      text-align: center;
      align-self: end;
    }
  }
}

.card-body-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-weight: 300;
}

.round-button {
  border-radius: 50px;
}

.formationTitle {
  font-size: 2em;
}

.formationTags {
  font-size: 1em;
  font-weight: normal;
  font-style: italic;
}

.hidden-text {
  opacity: 0;
}

@include media.tablet {
  .formationTitle {
    font-size: 1.75em;
  }
  .formationTags {
    font-size: 0.9em;
  }
}

@include media.small-tablet {
  .formationTitle {
    font-size: 2.5em;
  }
  .formationTags {
    font-size: 1.25em;
  }
}

@include media.large-mobile {
  .formationTitle {
    font-size: 4.5em;
  }
  .formationTags {
    font-size: 1.75em;
  }
}

@include media.mobile {
  .formationTitle {
    font-size: 2.5em;
  }
  .formationTags {
    font-size: 1em;
  }
}
</style>
