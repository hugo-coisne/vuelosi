<script setup lang="ts">
import { useParallaxEffect } from '@/composables/paralax'
import { onMounted } from 'vue'

onMounted(() => useParallaxEffect().init())
</script>

<template>
  <div class="brace">
    <div class="brace-content">
      <div class="content gs_reveal hidden-text"><slot /></div>
    </div>
    <img
      src="/assets/images/brace-background.webp"
      alt="background image"
      class="bg-image"
    />
    <div class="filter"></div>
    <img
      alt="cadre Talosi"
      src="/assets/images/blue_jaune_3.webp"
      class="forme"
    />
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';
@use '@/assets/css/media';

.brace {
  color: white;
  height: 50vh;
  width: 100%;
  min-height: 400px;
  position: relative;
  display: grid;
  align-content: center;
  overflow: hidden;

  .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .filter {
    background-image: linear-gradient(
      140deg,
      variables.$dark-blue-faded 18%,
      variables.$blue-faded
    );
    width: 100%;
    height: 100%;
    min-height: 250px;
    position: absolute;
    z-index: 1;
  }

  .forme {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    max-height: 225px;
  }
  .brace-content {
    position: relative;
    align-self: auto;
    display: flex;
    color: white;
    justify-content: center;
    .content {
      align-self: center;
      justify-self: center;
      text-align: center;
      z-index: 3;
      h1 {
        font-size: 5rem;
      }

      h3 {
        font-size: 1.2em;
        font-weight: 300;
        text-transform: uppercase;
      }

      ul {
        list-style-type: none;
        padding-left: 1rem;

        li {
          list-style-type: none;
          margin-right: 1rem;
          display: inline;
        }
      }
    }
  }
}

.hidden-text {
  opacity: 0;
  position: relative;
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .brace {
    .content {
      h1 {
        max-width: 70%;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .brace {
    .content {
      h1 {
        max-width: 60%;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .brace {
    height: 30vh;
    min-height: 200px;
    .brace-content {
      .content {
        h1 {
          max-width: 80%;
        }
      }
    }
  }
}

@media screen and (max-width: 575px) {
  .brace {
    height: 20vh;
    min-height: 250px;
    .brace-content {
      .content {
        h1 {
          font-size: 2rem;
        }
      }
    }
  }
}

@media print {
  .hidden-text {
    opacity: 1;
    visibility: visible;
  }
  .brace {
    height: 20vh;
    min-height: 250px;
  }
}

@include media.small-tablet {
  .trainig_list {
    grid-template-columns: repeat(2, 1fr);
  }

  .filters {
    max-width: 80%;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .container {
    padding-left: 0.5rem;
    padding-right: 2.5rem;
  }

  .title {
    font-size: 2.5rem;
  }
}

@include media.large-mobile {
  .combien {
    padding-top: 1rem;
  }

  .header {
    padding: 2rem;
  }

  .star {
    font-size: 20px;
  }

  .trainig_list {
    grid-template-columns: 1fr;
  }

  .filters {
    max-width: 80%;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .container {
    padding-left: 0.5rem;
    margin: 0 auto;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
