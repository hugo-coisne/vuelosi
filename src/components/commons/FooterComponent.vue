<script setup lang="ts">
import SocialIconsComponent from './SocialIconsComponent.vue'
interface Props {
  displayFooterTxt?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  displayFooterTxt: true,
})
</script>

<template>
  <section class="footer">
    <div class="social-network">
      <div>
        <span>Suivre l'actu Talosi : </span>
        <SocialIconsComponent invertColor />
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <img
          src="@/assets/svg/logo/talosi-logo-blanc.svg"
          alt="logo entreprise talosi"
          height="110px"
        />
        <p class="mt-4" v-if="displayFooterTxt">
          Bref tu l'as compris, c'est pas un job que l'on te propose c'est une
          aventure. Notre philosophie : <strong>Ikigai</strong>, chez nous,
          enfin, chez toi (si tu as tout suivi), tu trouveras la bonne raison
          qui te manque pour te lever le matin. Nous mettons tout en oeuvre pour
          y arriver (le partage, l'entreprenariat, la confiance, les
          opportunités, le choix ...).
        </p>
        <div class="logo-affiliation">
          <a href="http://www.numeum.fr" target="_blank" rel="nofollow"
            ><img src="@/assets/images/numeum.png" alt="logo numeum"
          /></a>
          <a appCustomRouterLink="/actualites/talosi-rejoint-la-french-tech"
            ><img src="@/assets/images/frenchtech.png" alt="logo french tech"
          /></a>
          <a
            appCustomRouterLink="/actualites/talosi-certifie-gold-ecovadis"
            target="_blank"
            ><img src="@/assets/images/ecovadis.png" alt="logo ecovadis gold"
          /></a>
        </div>
        <span class="mt-4 question">On reste en contact ?</span>
        <span class="mt-4"
          ><img
            src="@/assets/images/contact-number.png"
            height="14px"
            alt="numero contact Talosi"
        /></span>
        <span
          ><img
            src="@/assets/images/contact-email.png"
            height="18px"
            alt="email contact Talosi"
        /></span>
        <span>2 Place Pierre Mendès, Lille, France</span>
        <RouterLink aria-current="page" to="/rse">Politique RSE</RouterLink>
        <a
          href="https://docs.google.com/document/d/12EALCcaM8MsrVJoaaaKDyu8d3nD-LVEo8Fu1zG73I_4"
          target="_blank"
          >Mentions Légales</a
        >
        <a
          href="https://docs.google.com/document/d/1qjTJoQsc3tQ3xn9-82PIWNDryZvyl8lT0WxVlBnHuhU"
          target="_blank"
          >Politique de confidentialité</a
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@use '@/assets/css/variables';

.footer {
  text-align: center;
  color: white;
  .social-network {
    font-weight: bold;
    font-size: 24px;
    padding: 1rem 0;
    background-color: variables.$blue;
    display: flex;
    div {
      display: inline-flex;
      margin: auto;
      span {
        margin: auto 0.5rem auto auto;
      }
    }
    .material-icons {
      background-color: white;
      color: variables.$blue;
      border-radius: 50%;
      padding: 1rem;
      font-size: 32px;
    }
  }

  .contact {
    background-color: variables.$dark-blue;
    padding-left: 1rem;
    padding-right: 1rem;
    .container {
      position: relative;
      display: grid;
      padding: 2rem 0;
      img {
        margin: auto;
      }
      .question {
        font-weight: bold;
        font-size: 18px;
      }
      .logo-affiliation {
        display: flex;
        justify-content: center;
        column-gap: 20px;
        margin-top: 2rem;
        a {
          img {
            max-width: 100px;
          }
        }
      }
    }
  }
}

@media print {
  .footer {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  .footer {
    .social-network {
      div {
        display: flow-root;
      }
    }
  }
}
</style>
