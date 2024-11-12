<script setup lang="ts">
import { onMounted } from 'vue'
import ButtonComponent from '../commons/ButtonComponent.vue'
import { useParallaxEffect } from '@/composables/paralax'
defineProps<{
  buttonText?: string
  idButton?: string
  buttonHref?: string
  buttonSize?: string
}>()

onMounted(() => useParallaxEffect().init())
</script>

<template>
  <section id="citation">
    <div class="citation">
      <div class="our-secret">
        <p>Et maintenant</p>
      </div>
      <div class="text">
        <img
          src="/assets/svg/tillsets/quote.svg"
          class="quote gs_reveal gs_reveal_fromLeft"
          alt="image de quotes"
          width="150px"
        />
        <p class="container gs_reveal gs_reveal_fromLeft">
          On en parle ensemble ?
        </p>
        <span class="gs_reveal gs_reveal_fromLeft"
          ><p
            style="
              color: rgb(5, 5, 77);
              font-size: 1rem;
              font-weight: normal;
              font-style: normal;
              margin-bottom: 1rem;
            "
          >
            <span
              >On va faire simple : Si tu as une question, besoin d'un avis,
              d'un audit, d'une formation, de conseils... -> Cela tombe bien, on
              se fera une joie d'essayer d'y répondre !</span
            ><br /><br />
            <span
              >A toi de voir le format : WhatsApp, Discord, Téléphone, Mail,
            </span>
            <strike style="font-size: 16px">pigeons voyageur</strike
            ><span>
              ou autour d’un «&nbsp;café&nbsp;», c'est à toi de voir !</span
            >
          </p></span
        >
        <ButtonComponent
          v-if="buttonText"
          :type="'secondary'"
          :id="idButton"
          class="mt-3 gs_reveal"
          :size="buttonSize"
          :href="buttonHref"
          target="_blank"
          >{{ buttonText }}</ButtonComponent
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/css/variables';

.citation {
  .our-secret {
    background-color: variables.$yellow;
    color: white;
    text-align: center;
    padding: 1rem;
    z-index: 9;
  }

  p {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0px;
  }

  .text {
    padding-top: 6rem;
    padding-bottom: 6rem;
    background-color: variables.$light-grey;
    text-align: center;
    position: relative;

    .quote {
      max-width: 150px;
    }

    p {
      color: variables.$blue;
      font-weight: bold;
      font-size: 40px;
      font-style: italic;
      margin-bottom: 1rem;
    }

    p,
    span {
      margin: auto;
    }

    span {
      color: variables.$dark-blue;
      font-size: 16px;
    }

    .sigle {
      position: absolute;
      top: -50px;
      left: -7%;
      width: 35%;
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .citation {
    .text {
      .sigle {
        position: absolute;
        top: -50px;
        left: -17%;
        width: 55%;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .citation {
    .text {
      p {
        font-size: 28px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .citation {
    .text {
      .sigle {
        position: absolute;
        top: -50px;
        left: -24%;
        width: 65%;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .citation {
    .text {
      .sigle {
        position: absolute;
        top: -50px;
        left: -34%;
        width: 80%;
      }
    }
  }
}

@media screen and (max-width: 575px) {
  .citation {
    .text {
      .sigle {
        position: absolute;
        top: -50px;
        left: -57%;
        width: 120%;
      }
    }
  }
}
</style>
