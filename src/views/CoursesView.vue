<script setup lang="ts">
import BraceComponent from '@/components/commons/BraceComponent.vue'
import ButtonComponent from '@/components/commons/ButtonComponent.vue'
import CourseCardComponent from '@/components/commons/cards/CourseCardComponent.vue'
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'
import CoursesFilterComponent from '@/components/filters/CoursesFilterComponent.vue'
import JsonIdComponent from '@/components/courses/JsonIdComponent.vue'
import { useParallaxEffect } from '@/composables/paralax'
import type { Training } from '@/model/training'
import { Subscription } from 'rxjs'
import { onMounted, ref } from 'vue'

const {
  pageNumber = 1,
  postPerLine = 3,
  active = true,
  trainings = [
    {
      picture: '/assets/svg/courses/javascript.svg',
      title: 'Javascript',
      hashtag: ['#Front', '#Javascript', '#Développement'],
      description:
        "JavaScript est un langage de programmation de script côté client utilisé pour créer des pages web interactives et dynamiques. Il est généralement utilisé en conjonction avec HTML et CSS pour ajouter de la fonctionnalité à des sites web. Il peut être utilisé pour des tâches telles que la validation de formulaire, la création de cookies, l'animation, et la manipulation de contenu en temps réel. Il est également utilisé pour des applications web côté client et peut être exécuté dans un navigateur web ou dans un environnement de serveur tel que Node.js.",
      slug: 'javascript',
    },
    {
      picture: '/assets/svg/courses/javascript.svg',
      title: 'Javascript',
      hashtag: ['Front', 'Javascript', 'Développement'],
      description:
        "JavaScript est un langage de programmation de script côté client utilisé pour créer des pages web interactives et dynamiques. Il est généralement utilisé en conjonction avec HTML et CSS pour ajouter de la fonctionnalité à des sites web. Il peut être utilisé pour des tâches telles que la validation de formulaire, la création de cookies, l'animation, et la manipulation de contenu en temps réel. Il est également utilisé pour des applications web côté client et peut être exécuté dans un navigateur web ou dans un environnement de serveur tel que Node.js.",
      slug: 'javascript',
    },
  ],
  itemPerPage = -1,
  training_categories = [
    {
      trainings: [
        {
          picture: '/assets/images/courses/javascript.svg',
          title: 'Javascript',
          hashtag: ['Front', 'Javascript', 'Développement'],
          description:
            "JavaScript est un langage de programmation de script côté client utilisé pour créer des pages web interactives et dynamiques. Il est généralement utilisé en conjonction avec HTML et CSS pour ajouter de la fonctionnalité à des sites web. Il peut être utilisé pour des tâches telles que la validation de formulaire, la création de cookies, l'animation, et la manipulation de contenu en temps réel. Il est également utilisé pour des applications web côté client et peut être exécuté dans un navigateur web ou dans un environnement de serveur tel que Node.js.",
          slug: 'javascript',
        },
        {
          picture: '/assets/images/courses/javascript.svg',
          title: 'Javascript',
          hashtag: ['Front', 'Javascript', 'Développement'],
          description:
            "JavaScript est un langage de programmation de script côté client utilisé pour créer des pages web interactives et dynamiques. Il est généralement utilisé en conjonction avec HTML et CSS pour ajouter de la fonctionnalité à des sites web. Il peut être utilisé pour des tâches telles que la validation de formulaire, la création de cookies, l'animation, et la manipulation de contenu en temps réel. Il est également utilisé pour des applications web côté client et peut être exécuté dans un navigateur web ou dans un environnement de serveur tel que Node.js.",
          slug: 'javascript',
        },
      ],
      name: "FrontEnd"
    },
  ],
  results = true,
  numberOfResults = 0,
  averageGrade = 4.8,
} = defineProps<{
  slug?: any
  pageNumber?: number
  postPerLine: number
  active?: boolean
  trainings?: Training[]
  itemPerPage?: number
  training_categories?: any[]
  results?: boolean
  numberOfResults?: number
  averageGrade?: number
  feedbacks: number
}>()

const starArray = ref<number[]>([1, 1, 1, 1, 0.5])
const subscription = ref<Subscription | undefined>()
const searchString = ref<string>('')
const orgLD = ref<any>({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Talosi',
  description:
    "Talosi est une néo-ESN (Entreprise de Services Numériques) qui propose à chaque collaborateur de devenir associé de l'entreprise. Talosi est un membre de Numeum et de la French Tech de Lille.",
  url: 'https://www.talosi.com',
  logo: 'https://www.talosi.com/logo.png',
  foundingDate: '2021',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 place Pierre Mendes France',
    addressLocality: 'Lille',
    postalCode: '59000',
    addressRegion: 'Hauts-de-France',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '39',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Nicolas D.' },
      reviewBody:
        "ESN au Top qui partage des valeurs fortes: Fun, Partage, Expertise, Bienveillance. L'humain est au centre du projet, tous les collaborateurs ont la possibilité de passer associé gratuitement. L'expertise est également au rendez-vous et accompagne ses clients dans leurs transformations digitales avec brio.",
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Dylan D.' },
      reviewBody:
        "Boîte familiale où les salariés sont considérés et deviennent associés. L'espace coworking apporte une convivialité supplémentaire.",
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33 1 89 70 53 71',
    contactType: 'Standard',
    areaServed: 'FR',
    availableLanguage: ['French', 'English'],
    email: 'contact@talosi.com',
  },
  location: {
    '@type': 'Place',
    name: 'Talosi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2 place Pierre Mendes France',
      addressLocality: 'Lille',
      postalCode: '59000',
      addressRegion: 'Hauts-de-France',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.62925',
      longitude: '3.057256',
    },
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/talosi.official',
    'https://www.linkedin.com/company/talosi',
  ],
  potentialAction: {
    '@type': 'ContactAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.talosi.com/contact',
      inLanguage: 'fr',
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
    name: 'Une question ? Contacte nous !',
    description:
      'Contactez-nous pour toute question ou demande de renseignements.',
  },
})

onMounted(() => useParallaxEffect().init())
</script>

<template>
  <div>
    <div>
      <JsonIdComponent :itemLD="orgLD" />
      <BraceComponent>
        <div class="header">
          <h1 class="title">Formations Talosi</h1>
          <div class="filters container">
            <CoursesFilterComponent :title="' Filtre ta recherche '" />
          </div>
          <p
            v-if="numberOfResults > 1 && searchString == ''"
            class="result-count"
          >
            <span class="result-number">{{ numberOfResults }}</span> résultats
            trouvés.
          </p>
          <p v-if="numberOfResults == 1" class="result-count">
            <span class="result-number">{{ numberOfResults }}</span> résultat
            trouvé.
          </p>

          <div class="combien">
            <span
              v-for="star of starArray"
              class="star"
              :class="{ filled: star === 1, 'half-filled': star === 0.5 }"
              >&#9733;</span
            >
            <h2>{{ averageGrade }}/5</h2>
          </div>
        </div>
      </BraceComponent>
    </div>

    <div class="container" v-if="results">
      <section
        class="category_component"
        id="training_categories"
        v-for="category of training_categories"
      >
        <div v-if="category.trainings.length > 0">
          <TitleSectionComponent :title="category.name" />
          <section id="trainings" class="trainig_list">
            <CourseCardComponent
              v-for="training of category.trainings"
              :training="training"
              :postPerLine="postPerLine"
              class="posts"
            />
          </section>
          <br /><br />
        </div>
      </section>
    </div>
    <div v-if="!results">
      <h2 class="no-result">
        Nous n'avons pas de formations qui correspondent à votre recherche.<br />N'hésitez
        pas à élargir votre recherche ou demander une formation sur mesure.
      </h2>
    </div>
    <div class="footer">
      <img alt="Logo Talosi" src="/assets/images/logo_blue.png" class="forme" />
      <h2>Formations sur-mesure</h2>
      <h5>
        Vous avez besoin d'une formation spécifique, n'hésitez pas à prendre
        contact avec nous
      </h5>
      <ButtonComponent
        type="primary"
        id="rejoin-us-intro"
        class="mt-3"
        size="rounded-large"
        :routerLink="'/contact'"
        >Prendre contact
      </ButtonComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/media';
@use '@/assets/css/variables';

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

.content {
  text-align: center;
  position: relative;

  h1 {
    font-size: 5rem;
  }

  h3 {
    font-size: 1em;
    font-weight: 300;
    margin-left: 20%;
    margin-right: 20%;
  }

  ul {
    list-style-type: none;

    li {
      list-style-type: none;
    }
  }
}

.result-count {
  font-style: italic;
  color: #a2a7ab;

  .result-number {
    color: #fad922;
  }
}

.filters {
  margin-top: 2em;
  margin-bottom: 2em;
  max-width: 50%;
}

.trainig_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 50px;
}

.search-input {
  padding-top: 16px;
}

.footer {
  text-align: center;
  border-radius: 25px;
  background: variables.$backgroundGrey;
  margin-left: 3em;
  margin-right: 3em;
  margin-bottom: 2.5em;
  padding: 2em;

  h1 {
    color: variables.$blue;
    font-size: 3rem;
  }

  h5 {
    font-weight: 400;
  }
}

.category_component {
  margin-left: 2rem;
  position: relative;
}

.training-card {
  min-width: 30%;
}

.forme {
  max-width: 65%;
}

.posts {
  margin-top: 2em;
}

.title {
  margin-top: 2%;
  font-size: 5rem;
}

.no-result {
  margin-top: 3em;
  position: relative;
  text-align: center;
  margin-bottom: 3em;
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
    padding-top: 2rem;
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
