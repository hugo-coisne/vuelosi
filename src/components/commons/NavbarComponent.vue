<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import BurgerMenuComponent from './BurgerMenuComponent.vue'
import SocialIconsComponent from './SocialIconsComponent.vue'
import { computed, ref, watch } from 'vue'
import router from '@/router/index'

const html = document.documentElement
const routes = router.getRoutes()

var {
  blogIndex = 1,
  hiddenLinksCount = 1,
  showSideNavProp = false,
  greyNavbar = false,
} = defineProps<{
  showSideNavProp?: boolean
  greyNavbar?: boolean
  blogIndex?: number
  hiddenLinksCount?: number
}>()

const showSideNav = ref(showSideNavProp)

const links = ref(routes.slice(0, routes.length - blogIndex - hiddenLinksCount))
const lastLinks = ref(
  routes.slice(
    routes.length - blogIndex - hiddenLinksCount,
    routes.length - hiddenLinksCount,
  ),
)

const route = useRoute()
const path = computed(() => route.path)

watch(
  () => showSideNavProp,
  newVal => {
    showSideNav.value = newVal
  },
)

function onToggleMenu() {
  showSideNav.value = !showSideNav.value
  showSideNav.value
    ? (html.style.overflow = 'hidden')
    : (html.style.overflow = 'auto')
}
</script>

<template>
  <header>
    <div class="talosi-fake-navbar"></div>

    <nav class="talosi-navbar no-print" style="background-color: white">
      <div class="container-fluid">
        <RouterLink class="navbar-logo" to="/">
          <img
            :src="`/assets/images/${
              greyNavbar ? 'talosi_blue_inline.png' : 'logo_blue_inline.png'
            }`"
            alt="Logo Talosi"
            width="170px"
            height="30px"
          />
        </RouterLink>
        <div class="right-part">
          <ul>
            <li class="nav-item" v-for="link in links">
              <RouterLink
                :to="link.path"
                :class="'nav-link ' + (path == link.path ? 'active' : '')"
                >{{ link.name }}</RouterLink
              >
            </li>
            <li class="nav-item">
              <a href="https://blog.talosi.com" class="nav-link">Blog</a>
            </li>
            <li class="nav-item" v-for="link in lastLinks">
              <RouterLink
                :to="link.path"
                :class="'nav-link ' + (path == link.path ? 'active' : '')"
                >{{ link.name }}</RouterLink
              >
            </li>
          </ul>
          <div class="social">
            <SocialIconsComponent class="icons" />
          </div>
          <div class="burger-menu" @click="onToggleMenu()">
            <BurgerMenuComponent />
          </div>
        </div>
      </div>
    </nav>

    <div
      :class="`talosi-navbar-collapsed no-print ${showSideNav ? 'active' : ''}`"
    >
      <img
        src="/assets/svg/tillsets/cross-circle.svg"
        alt="croix"
        @click="onToggleMenu()"
        class="cross"
      />
      <div class="logo">
        <img
          src="/assets/svg/logo/talosi-logo-blanc.svg"
          alt="logo"
          width="150px"
        />
      </div>
      <ul>
        <li class="nav-item" v-for="link in links">
          <RouterLink
            :class="'nav-link ' + (path == link.path ? 'active' : '')"
            aria-current="page"
            @click="onToggleMenu()"
            :to="link.path"
            >{{ link.name }}</RouterLink
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current="page"
            href="https://blog.talosi.com/"
            target="_blank"
            >Blog</a
          >
        </li>
        <li class="nav-item" v-for="link in lastLinks">
          <RouterLink
            :class="'nav-link ' + (path == link.path ? 'active' : '')"
            aria-current="page"
            @click="onToggleMenu()"
            :to="link.path"
            >{{ link.name }}</RouterLink
          >
        </li>
      </ul>
      <div class="footer">
        <RouterLink aria-current="page" to="/rse" @click="onToggleMenu()"
          >Politique RSE</RouterLink
        >
        <a
          href="https://docs.google.com/document/d/12EALCcaM8MsrVJoaaaKDyu8d3nD-LVEo8Fu1zG73I_4"
          target="_blank"
          >Mentions légales</a
        >
        <a
          href="https://docs.google.com/document/d/1qjTJoQsc3tQ3xn9-82PIWNDryZvyl8lT0WxVlBnHuhU"
          target="_blank"
          @click="onToggleMenu()"
          >Politique de confidentialité</a
        >
        <SocialIconsComponent class="pb-4 pt-4" invertColor />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';
@use '@/assets/css/underline';

@mixin list-style {
  list-style-type: none;
  display: flex;

  .nav-link {
    color: black;
    font-weight: bold;
    margin-right: 1rem;
  }

  .nav-link.active {
    @include underline.underline(0.25rem, 5px);
  }
}

.talosi-fake-navbar {
  height: 80px;
}

.grey-navbar {
  background-color: #ebf0f5;
}

.talosi-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);

  .container-fluid {
    padding: 0;
    display: inline-flex;

    * {
      margin-top: auto;
      margin-bottom: auto;
    }

    .navbar-logo {
      padding-left: 1.5rem;
    }

    .right-part {
      display: inline-flex;
      margin-left: auto;

      ul {
        @include list-style;
      }

      .burger-menu {
        margin-left: 2rem;
        padding: 1rem;
        background-color: variables.$yellow;
        cursor: pointer;
      }
      .burger-menu * {
        cursor: pointer;
      }
    }
  }
}

.talosi-navbar-collapsed {
  position: fixed;
  top: -250vh;
  width: 100vw;
  max-height: 100vh;
  height: 100%;
  background: linear-gradient(135deg, variables.$dark-blue, variables.$blue);
  z-index: 100;
  text-align: center;
  color: white;
  transition-duration: 1s;

  .cross {
    color: variables.$yellow;
    fill: variables.$yellow;
    position: absolute;
    top: 2.7rem;
    right: 2rem;
    height: 40px;
    width: 40px;
  }

  .logo {
    max-width: 40%;
    margin: 8vh auto auto;
  }

  ul {
    margin-top: 8vh;
    @include list-style;
    display: grid;

    .nav-link {
      color: white;
      font-weight: bold;
      font-size: 24px;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    display: grid;
    width: 100%;

    * {
      margin: auto;
    }
  }
}

.talosi-navbar-collapsed.active {
  position: fixed;
  top: 0;
  left: 0;
  transition-duration: 1s;
}

@media screen and (min-width: 768px) {
  .talosi-navbar {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .container-fluid {
      .right-part {
        .burger-menu {
          display: none;
        }

        .social {
          padding-right: 1.5rem;
        }
      }
    }
  }

  .talosi-navbar-collapsed {
    display: none;
  }
}

@include media.large-mobile {
  .talosi-fake-navbar {
    height: 70px;
  }

  .talosi-navbar {
    .container-fluid {
      .right-part {
        .social,
        ul {
          display: none;
        }
      }
    }
  }
}

@media print {
  .talosi-fake-navbar,
  .no-print,
  .no-print * {
    display: none !important;
  }
}
</style>
