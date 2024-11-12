<script setup lang="ts">
import { onMounted } from 'vue'
import TitleSectionComponent from './TitleSectionComponent.vue'
import { useParallaxEffect } from '@/composables/paralax'
onMounted(() => useParallaxEffect().init())

const {
  imageOnRight = false,
  mode = 'light',
  image = {
    filename: '/assets/images/economique.webp',
    alt: 'Réunion de personnes',
  },
} = defineProps<{
  imageOnRight?: boolean
  mode?: string
  title: string
  image?: { filename: string; alt: string }
}>()
</script>

<template>
  <div>
    <div :class="'img-and-text ' + (imageOnRight ? 'right ' : 'left ') + mode">
      <img
        v-if="!imageOnRight"
        :src="image.filename"
        class="img-fluid"
        :alt="image.alt"
      />
      <div class="content">
        <TitleSectionComponent
          v-if="mode != 'dark'"
          :title="title"
          class="title"
        />
        <h2
          class="gs_reveal gs_reveal_fromRight hidden-text"
          v-if="mode === 'dark'"
        >
          {{ title }}
        </h2>
        <div
          class="gs_reveal gs_reveal_fromRight hidden-text"
          style="
            opacity: 1;
            visibility: inherit;
            transform: translate(0px, 0px);
            translate: none;
            rotate: none;
            scale: none;
          "
        >
          <p>
            Nous accompagnons nos partenaires dans leurs enjeux de
            transformation digitale avec la même implication que leurs
            collaborateurs.
          </p>
          <p>
            Les innovations, les challenges et le pragmatisme sont nos moteurs
            au quotidien.
          </p>
        </div>
      </div>
      <img
        v-if="imageOnRight"
        :src="image.filename"
        class="img-fluid"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';

.img-and-text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-fluid {
    height: 500px;
  }

  .content {
    display: grid;
    padding: 1rem 3rem;
    align-self: center;
    justify-self: center;
  }
}

.grey {
  background-color: variables.$light-grey;
}

.dark {
  background-color: variables.$dark-blue;
  .content {
    color: white;
    text-decoration: none;
  }
}

@media screen and (max-width: 991px) {
  .img-and-text {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);

    img {
      max-height: 300px;
      object-fit: cover;
    }
    .content {
      div {
        p {
          text-align: justify;
        }
      }
    }
  }
}

.hidden-text {
  opacity: 0;
}

.img-and-text.left {
  img {
    grid-column: 1 / 2;
  }
  .content {
    grid-column: 2 / 3;
  }
}
@media screen and (max-width: 991px) {
  .img-and-text.left {
    img {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .content {
      grid-column: 1 / 2;
      grid-row: 2 / 4;
    }
  }
}

.img-and-text.right {
  img {
    grid-column: 2 / 3;
  }
  .content {
    grid-column: 1 / 2;
  }
}
@media screen and (max-width: 991px) {
  .img-and-text.right {
    img {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .content {
      grid-column: 1 / 2;
      grid-row: 2 / 4;
    }
  }
}
</style>
