<script setup lang="ts">
import ButtonComponent from '@/components/commons/ButtonComponent.vue'
import { useParallaxEffect } from '@/composables/paralax';
import { onMounted } from 'vue';

const {
  cities = ['Lille', 'Paris', 'Lyon'],
  buttonText = "Rejoindre l'aventure",
} = defineProps<{
  cities?: any
  buttonText?: string
}>()
onMounted(() => useParallaxEffect().init())
</script>

<template>
  <!-- <div *ngIf="loading && isDesktop" class="loading-beer">
  <img
    class="icon"
    src="assets/gif/loading.gif"
    alt="Beer Talosi"
    width="40px"
  />
</div>
<app-beer-3d
  id="beer1-3d"
  *ngIf="showBeer && isDesktop && !onCursor"
  [size]="100"
  [scrollReceived]="scrollToSend"
></app-beer-3d>
<div class="beer">
  <app-beer-3d
    id="beer2-3d"
    *ngIf="showBeer && isDesktop && onCursor"
    [size]="150"
    [scrollReceived]="scrollToSend"
  ></app-beer-3d>
</div>

<div
  class="console"
  *ngIf="!showBeer"
  [ngClass]="{
    show: scrollGreaterThanFivePercent,
    'side-tab': !scrollGreaterThanFivePercent
  }"
  (click)="showTaloboy(true)"
>
  <button class="toggle-tab-button">
    <img
      class="icon"
      src="assets/svg/skills/game.svg"
      alt="Beer Talosi"
      width="35px"
    />
  </button>
</div>

<app-beer-3d
  id="beer-3d-mobile"
  *ngIf="showBeer && !isDesktop"
  [size]="90"
  [scrollReceived]="scrollToSend"
  (click)="toggleBeer()"
></app-beer-3d>
<app-taloboy
  *ngIf="isTaloboy"
  (changeTaloboy)="showTaloboy($event)"
></app-taloboy>

<div
  class="console"
  *ngIf="showBeer"
  (keydown.enter)="$event.preventDefault()"
  [ngClass]="{
    show: scrollGreaterThanFivePercent,
    'side-tab': !scrollGreaterThanFivePercent
  }"
  (click)="showTaloboy(true)"
>
  <button class="toggle-tab-button">
    <img
      class="icon"
      src="assets/svg/skills/game.svg"
      alt="Beer Talosi"
      width="35px"
    />
  </button>
</div>-->

  <section id="intro">
    <div class="intro">
      <img
        src="/assets/images/intro.webp"
        alt="background image"
        class="bg-image"
      />
      <div class="filter"></div>

      <div class="cities">
        <p class="city" v-for="city of cities">{{ city }}</p>
      </div>

      <img
        alt="cadre Talosi"
        src="/assets/images/blue_jaune_3.webp"
        class="forme"
      />
      <div
        class="content gs_reveal hidden-text"
        style="
          opacity: 1;
          visibility: inherit;
          transform: translate(0px, 0px);
          translate: none;
          rotate: none;
          scale: none;
        "
      >
        <img
          alt="Logo Talosi"
          src="/assets/svg/logo/talosi-logo-blanc.svg"
          class="img-fluid logo"
        />
        <div class="explanation">
          <p>
            Bienvenue en Talosi
            <br />
            Talosi, signifie « ta maison » en finnois dans laquelle chaque
            collaborateur se sentira chez lui.
            <br />
            Et pour aller plus loin, TaloSI, La Maison du SI - à l’image des
            maisons de haute-couture - vous délivrera un service personnalisé et
            sur mesure.
            <br />
            Enfin pour assumer notre ADN de geek, les talosiens sont un peuple
            extra-terrestre dans une célèbre série de science-fiction.
          </p>
        </div>
        <ButtonComponent
          id="rejoin-us-intro"
          class="mt-3"
          size="large"
          routerLink="/contact"
          >{{ buttonText }}
        </ButtonComponent>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/media';
@use '@/assets/css/variables';

.no-select {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

#beer1-3d {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 99;
}

#beer2-3d,
.beer {
  position: absolute;
  display: block;
  z-index: 99;
}

#beer-3d-mobile {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 99;
}

.loading-beer {
  position: fixed;
  top: 6px;
  left: 6px;
  display: block;
  z-index: 99;
  padding: 1rem;
}

.hide-logo {
  display: none;
}

.grey-navbar {
  background-color: #ebf0f5 !important;
}
.fixed-button {
  position: fixed;
  top: 88px;
  left: 10px;
  z-index: 99;
  button {
    margin-bottom: 0 !important;
  }
}

.absolute-button {
  position: absolute;
  top: 88px;
  left: 10px;
  z-index: 2;
  button {
    margin: 0 !important;
  }
}

#toggle-beer > button {
  margin: 0px;
}

#rejoin-us-intro {
  margin-bottom: 15px;
}

.side-tab {
  display: block;
  position: fixed;
  top: 88px;
  left: 10px;
  padding: 10px 7px;
  background-color: #fad922;
  border-radius: 10px 10px 10px 10px;
  transition: transform 0.3s ease;
  z-index: 99;
  border: 1px solid #0033ff;
}

.hidden-text,
.hidden-button {
  opacity: 0;
}

.show {
  display: block;
  position: fixed;
  top: 88px;
  left: 0;
  padding: 10px 7px;
  background-color: #fad922;
  border-radius: 0px 10px 10px 0px;
  transition: transform 0.3s ease;
  z-index: 99;
  border-top: 1px solid #0033ff;
  border-right: 1px solid #0033ff;
  border-bottom: 1px solid #0033ff;
}

.toggle-tab-button {
  border: none;
  background: none;
  cursor: pointer;
}

.intro {
  color: white;
  height: 90vh;
  min-height: 800px;
  position: relative;
  display: grid;

  .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .filter {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    min-height: 800px;
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

  .content {
    align-self: center;
    justify-self: center;
    position: absolute;
    text-align: center;
    z-index: 9;

    h1 {
      margin: 2rem auto;
    }

    img {
      max-width: 400px;
    }

    .explanation {
      padding-top: 3%;
      font-size: 18px !important;
    }
  }
}

.cities {
  color: white;
  text-align: center;
  position: relative;
}
.city {
  color: white;
  font-size: 2.5em;
  display: inline-block;
  padding: 1rem 3rem;
  vertical-align: middle;
  position: relative;
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .intro {
    .content {
      h1 {
        max-width: 70%;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .intro {
    .content {
      h1 {
        max-width: 60%;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .intro {
    height: 100vh;
    max-height: -webkit-fill-available;

    .content {
      h1 {
        max-width: 80%;
      }
    }
  }

  .side-tab {
    top: 133px;
  }
}

@media screen and (max-width: 575px) {
  .intro {
    height: 90vh;
    max-height: -webkit-fill-available;

    .content {
      h1 {
        max-width: 90%;
      }

      .explanation {
        font-size: 18px;
      }
    }
  }

  .city {
    font-size: 1.5em;
    padding: 1rem 2rem;
  }

  .side-tab {
    top: 120px;
  }
}

@media print {
  .sessions-detail {
    display: none;
  }
}
</style>
