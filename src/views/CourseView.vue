<script setup lang="ts">
import JsonIdComponent from '@/components/courses/JsonIdComponent.vue'
import CourseHeaderComponent from '@/components/courses/CourseHeaderComponent.vue'
import type { Training } from '@/model/training'
import CourseDetailComponent from '@/components/courses/CourseDetailComponent.vue'
import CourseContentComponent from '@/components/courses/CourseContentComponent.vue'

const training: Training = {
  picture: '/assets/images/courses/javascript.svg',
  title: 'Javascript',
  hashtag: ['Front', 'Javascript', 'Développement'],
  description:
    "JavaScript est un langage de programmation de script côté client utilisé pour créer des pages web interactives et dynamiques. Il est généralement utilisé en conjonction avec HTML et CSS pour ajouter de la fonctionnalité à des sites web. Il peut être utilisé pour des tâches telles que la validation de formulaire, la création de cookies, l'animation, et la manipulation de contenu en temps réel. Il est également utilisé pour des applications web côté client et peut être exécuté dans un navigateur web ou dans un environnement de serveur tel que Node.js.",
  slug: 'javascript',
  id: 0,
  objectives: [
    'Acquérir de solides bases en Javascript',
    'Bonnes pratiques & tips',
  ],
  trainee: ['Développeurs', 'Intégrateurs'],
  prerequisite: ['Avoir des notions en HTML / CSS'],
  duration: '2 Jours (14 heures)',
  price: '1200',
  location: ['En présentiel', 'En distanciel'],
  sessions: [],
  grade: 4.8,
  feedbacks: 1,
  plan: [
    {
      title: '',
      content: [
        {
          title: 'Introduction à JavaScript',
          content: [
            {
              title:
                'Aperçu de JavaScript et de son rôle dans le développement web',
              content: [],
            },
            {
              title:
                "Installation et configuration d'un environnement de développement",
              content: [],
            },
          ],
        },
        {
          title: 'Les bases de JavaScript',
          content: [
            {
              title: 'Variables et types de données',
              content: [],
            },
            {
              title: 'Opérateurs et expressions',
              content: [],
            },
            {
              title: 'Structures de contrôle de flux (boucles, conditions)',
              content: [],
            },
          ],
        },
        {
          title: 'Fonctions et objets JavaScript',
          content: [
            {
              title: 'Création et utilisation de fonctions',
              content: [],
            },
            {
              title: "Manipulation d'objets",
              content: [],
            },
            {
              title: 'Notion de scope',
              content: [],
            },
          ],
        },
        {
          title: 'Tableaux et boucles en JavaScript',
          content: [
            {
              title: 'Utilisation de tableaux pour stocker des données',
              content: [],
            },
            {
              title: 'Boucles pour parcourir et manipuler des données',
              content: [],
            },
          ],
        },
        {
          title: 'Manipulation du DOM',
          content: [
            {
              title: 'Comprendre le DOM et comment il est utilisé',
              content: [],
            },
            {
              title:
                'Utilisation des méthodes pour accéder et manipuler des éléments HTML',
              content: [],
            },
            {
              title: 'Événements et interactions utilisateur',
              content: [],
            },
          ],
        },
        {
          title: 'Expressions régulières',
          content: [
            {
              title:
                'Utilisation des expressions régulières pour manipuler des chaînes de caractères',
              content: [],
            },
            {
              title: "Exemples d'utilisation courante",
              content: [],
            },
          ],
        },
        {
          title: 'Utilisation de bibliothèques et de frameworks JavaScript',
          content: [
            {
              title: 'Introduction à jQuery',
              content: [],
            },
            {
              title: 'Introduction à React ou Angular',
              content: [],
            },
          ],
        },
        {
          title: 'Outils de développement',
          content: [
            {
              title: 'Utilisation des outils pour déboguer et tester le code',
              content: [],
            },
            {
              title: 'Utilisation des outils pour la performance',
              content: [],
            },
          ],
        },
      ],
    },
  ],
}
const productLD = { key: '' }
</script>

<template>
  <div v-if="training">
    <JsonIdComponent :itemLD="productLD" />

    <CourseHeaderComponent :training="training" class="header_print" />

    <div id="content" class="training-content">
      <CourseDetailComponent id="detail" :training="training" />

      <CourseContentComponent id="description" :training="training" />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';

#content {
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1200px;
  #detail {
    margin: 1.5rem 2rem 1.5rem 0;
    justify-self: end;
    min-width: 33%;
    width: 33%;
  }

  #description {
    margin: 1.5rem 2rem 1.5rem 0;
    justify-self: start;
    flex-grow: 1;
  }
}

.training-content {
  position: relative;
}

@media print {
  #content {
    #description {
      width: auto;
    }
  }
}

@media screen and (max-width: 768px) {
  #content {
    display: block;
    padding: 15px;
    width: 100%;
  }
}
</style>
