<script setup lang="ts">
import { onMounted } from 'vue'
import SocialIconsComponent from '../commons/SocialIconsComponent.vue'
import TitleSectionComponent from '../commons/TitleSectionComponent.vue'
import { useParallaxEffect } from '@/composables/paralax'
import ContactFormTypeformComponent from './ContactFormTypeformComponent.vue'

onMounted(() => useParallaxEffect().init())
</script>

<template>
  <div id="contact-form">
    <div class="contact-form">
      <div class="social">
        <div class="social-contact gs_reveal gs_reveal_fromLeft hidden-text">
          <TitleSectionComponent :title="'Via nos différents canaux'" />
          <span>Un petit message sur nos réseaux sociaux</span>
          <SocialIconsComponent />
        </div>
        <div class="phone-contact gs_reveal gs_reveal_fromLeft hidden-text">
          <span>Un appel direct sur notre standard</span>
          <a
            class="link"
            href="tel:+33189075371"
            target="_blank"
            rel="nofollow"
          >
            <img
              class="icon"
              src="/assets/svg/tillsets/phone.svg"
              alt="Appeler le standard Talosi"
              width="50px"
            />
            <span>01 89 70 53 71</span>
          </a>
        </div>
      </div>
      <div class="form">
        <div class="gs_reveal gs_reveal_fromLeft hidden-text">
          <TitleSectionComponent :title="'Via notre formulaire'" />
          <div class="form-contact">
            <ContactFormTypeformComponent :formType="'contact'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/media';
@use '@/assets/css/variables';

#contact-form {
  padding: 75px 150px;
  background-color: variables.$light-grey;
  max-width: 100vw;
  min-height: 500px;
  text-align: center;

  .contact-form {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
    justify-items: center;

    .social {
      margin: auto;
      .social-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        margin: auto;
        span {
          padding: 1rem 0;
        }
      }
      .phone-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        margin: auto;
        span {
          padding: 1rem 0;
        }
        a {
          text-decoration: none;
          span {
            color: #000;
            font-weight: bold;
          }
        }
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .app-title-section {
        align-self: flex-start;
        margin-bottom: auto;
      }
      .form-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150%;
      }
    }
  }
}

.hidden-text {
  opacity: 0;
}

@include media.small-tablet {
  #contact-form {
    padding: 0px;

    .contact-form {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}

@include media.large-mobile {
  #contact-form {
    padding: 0px;

    .contact-form {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}

@include media.mobile {
  #contact-form {
    padding: 0px;

    .contact-form {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}
</style>
