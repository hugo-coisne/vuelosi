<script setup lang="ts">
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'
import LogoAndTextCardComponent from '@/components/commons/cards/LogoAndTextCardComponent.vue'
import { useParallaxEffect } from '@/composables/paralax';
import { onMounted } from 'vue';
const {
  network: any = {
    name: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=33608153735&text=Bonjour+Hello+de+Talosi%2C+je+te+contacte+suite+au+passage+sur+Talosi.com+&app_absent=0',
  },
  citation_title = 'Devenez associé avec des parts offertes au capital !',
} = defineProps<{
  network?: any
  citation_title?: string
}>()
onMounted(() => useParallaxEffect().init())
</script>

<template>
  <section id="intrapreneur">
    <div class="intrapreneurs">
      <img
        src="/assets/images/intrapreneur/back.webp"
        alt="Background intrapreneur Talosi"
        class="back-img"
      />
      <img
        src="/assets/gif/logo_blanc.gif"
        alt="Talosi Logo"
        class="logo gs_reveal gs_reveal_fromLeft"
        width="200px"
        style="
          opacity: 1;
          visibility: inherit;
          transform: translate(-50%, 0%);
          translate: none;
          rotate: none;
          scale: none;
        "
      />
      <div class="philosophy">
        <div class="gs_reveal gs_reveal_fromRight">
          <img
            src="/assets/svg/tillsets/quote.svg"
            alt="Quote Talosi"
            width="114px"
          />
          <TitleSectionComponent
            :title="citation_title"
            :style="'padding: 0;'"
          />
          <div>
            <p style="color: rgb(5, 5, 77)">
              <span
                >Tout collaborateur qui sera validé par la communauté des
                Talosien(ne)s aura la possibilité de passer associé chez
                Talosi.</span
              >
              <br /><br />
              <span
                >Tu ne travailleras plus pour une entreprise mais pour ton
                entreprise !</span
              ><br />
              <span
                >Ce qui implique de décider ensemble notre avenir car ici : One
                man, One vote !</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="citation gs_reveal gs_reveal_fromRight">
        <LogoAndTextCardComponent
          :image="{ filename: 'mission.png' }"
          :text="'Définissez votre mission, prenez le contrôle de vos défis ici !'"
        />
        <LogoAndTextCardComponent
          :image="{ filename: 'sante.png' }"
          :text="'Ta mutuelle et ta prévention à 100% offerte pour toi et ta famille !'"
        />
        <LogoAndTextCardComponent
          :image="{ filename: 'formation.png' }"
          :text="'Formations en open bar : développez vos compétences sans limites chez nous!'"
        />
        <LogoAndTextCardComponent
          :image="{
            filename: 'anniversaire.png',
          }"
          :text="'Célébrez votre anniversaire : journée offerte chez nous!'"
        />
      </div>
      <div class="more">
        <p>Et bien plus encore</p>
        <a class="link" :href="network.link" target="_blank" rel="nofollow">
          <img
            class="icon"
            src="/assets/svg/tillsets/plus.png"
            alt="Voir plus d'avantages Talosi"
            width="114px"
          />
        </a>
      </div>
    </div>
    <div class="till">
      <img
        src="/assets/svg/tillsets/fresque.svg"
        class="fresque right rotate"
        alt="fresque"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';

.intrapreneurs {
  display: grid;
  background-color: variables.$light-grey;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, auto);
  max-width: 100vw;

  .back-img {
    grid-column: 1/2;
    grid-row: 1 / 4;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    max-width: 100vw;
  }

  .logo {
    grid-column: 1/2;
    grid-row: 1 / 4;
    align-self: center;
    justify-self: center;
    z-index: 2;
    max-width: 25%;
  }

  .philosophy {
    grid-row: 1 / 1;
    background-color: variables.$yellow;
    color: variables.$dark-blue;
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
    text-align: center;

    div {
      padding: 2rem;
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      align-self: center;
      justify-self: center;

      h2 {
        text-align: justify;
        line-break: auto;
        margin-left: 1rem;
        font-size: 1.2rem;
      }

      img {
        max-width: 100px;
      }
    }
  }

  .citation {
    grid-row: 2 / 3;
    color: variables.$dark-blue;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }

  .more {
    margin: 0px;
    padding: 0px;
    grid-row: 3 / 4;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    align-items: baseline;
    justify-content: center;

    a {
      display: inline-block;
      padding: 1rem;

      img {
        width: 25px;
        height: 25px;
      }
    }

    p {
      margin: 0;
      padding: 0;
      display: inline-block;
    }
  }
}

@media screen and (max-width: 1999px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}

@media screen and (max-width: 991px) {
  .intrapreneurs {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(5, auto);

    .back-img {
      grid-row: 1 / 2;
      max-height: 300px;
    }

    .logo {
      grid-row: 1 / 2;
    }

    .philosophy {
      grid-row: 2 / 3;
    }

    .citation {
      overflow-x: auto;
      grid-row: 3 / 4;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      div {
        padding: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-column: auto;
        grid-row: auto;

        img,
        h1 {
          align-self: center;
          justify-self: center;
        }

        img {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
      }
    }

    .more {
      overflow-x: auto;
      grid-row: 4 / 5;
    }
  }
}
</style>
