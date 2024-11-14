<script setup lang="ts">
import ButtonComponent from '@/components/commons/ButtonComponent.vue'
import ModalComponent from '@/components/commons/ModalComponent.vue'
import NewsPostComponent from '@/components/commons/NewsPostComponent.vue'
import SocialIconsComponent from '@/components/commons/SocialIconsComponent.vue'
import TagFilterComponent from '@/components/filters/TagFilterComponent.vue'
import { useParallaxEffect } from '@/composables/paralax'
import type { Post } from '@/model/post'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const {
  postPerLine = 0,
  posts = [
    {
      title: 'BBL - 3D Web',
      body: '',
      fullBody:
        "Joseph et Sabrina, ont décidé de jouer avec les nerfs des Talosiens. 😶\n🍻 S\’amuser à modéliser une pinte en 3D pour l\’intégrer sur le web, une idée qui a réussi à piquer notre curiosité !\n💡 De la conception à l'intégration via Three.JS, chaque étape nous a poussé à repousser les limites de notre créativité et de notre expertise technique.\n🚀 On est fier de partager que les Talosiens ont relevé le défi avec brio, en intégrant de manière fluide et immersive cette pinte de bière. 🍺 Une prouesse technique qui témoigne de notre engagement envers l'innovation et l'excellence dans nos projets avec toujours une touche de fun.\n🌟 Une expérience qui permet de renforcer encore plus les liens au sein de la famille Talosi. 🤝\n🙌 Merci à tous les Talosiens qui ont participé à ce BBL récréatif.\nUn énorme merci à notre binôme d’animateur Joseph Bodard et Sabrina Kernouf. C'est grâce à des moments comme celui-ci qu'on continue à évoluer et à repousser les frontières de l'innovation. 😁\nEnvie de voir ce que ça rend ? Fonce la page d'accueil\n#BBL #3DWeb #ThreeJS #creativity",
      imgUrl: '/assets/images/actus/bbl-3d.jpeg',
      dateOfCreation: 'Mar 28, 2024',
      author: 'Kevin',
      intro: '😬 Frustration chez Talosi 🍕',
      slug: 'bbl-3d-web',
      relatedPosts: [],
      tags: ['Formation', 'Evènement', 'Technique'],
      youtube: '',
    },
    {
      title: '🎉 Journée Mondiale des Développeurs 🎉',
      body: '',
      fullBody: '',
      imgUrl: '/assets/images/actus/sansurl.png',
      dateOfCreation: 'Mar 7, 2024',
      author: 'Hugues Dassonval',
      intro:
        "Pour la journée mondiales des développeurs, on met le code à l'honneur !",
      slug: 'bonne-fete-a-tous-les-developpeurs',
      relatedPosts: [],
      tags: ['Nouveauté'],
      youtube: '',
    },
    {
      title: 'BBL - 3D Web',
      body: '',
      fullBody:
        "Joseph et Sabrina, ont décidé de jouer avec les nerfs des Talosiens. 😶\n🍻 S\’amuser à modéliser une pinte en 3D pour l\’intégrer sur le web, une idée qui a réussi à piquer notre curiosité !\n💡 De la conception à l'intégration via Three.JS, chaque étape nous a poussé à repousser les limites de notre créativité et de notre expertise technique.\n🚀 On est fier de partager que les Talosiens ont relevé le défi avec brio, en intégrant de manière fluide et immersive cette pinte de bière. 🍺 Une prouesse technique qui témoigne de notre engagement envers l'innovation et l'excellence dans nos projets avec toujours une touche de fun.\n🌟 Une expérience qui permet de renforcer encore plus les liens au sein de la famille Talosi. 🤝\n🙌 Merci à tous les Talosiens qui ont participé à ce BBL récréatif.\nUn énorme merci à notre binôme d’animateur Joseph Bodard et Sabrina Kernouf. C'est grâce à des moments comme celui-ci qu'on continue à évoluer et à repousser les frontières de l'innovation. 😁\nEnvie de voir ce que ça rend ? Fonce la page d'accueil\n#BBL #3DWeb #ThreeJS #creativity",
      imgUrl: '/assets/images/actus/bbl-3d.jpeg',
      dateOfCreation: 'Mar 28, 2024',
      author: 'Kevin',
      intro: '😬 Frustration chez Talosi 🍕',
      slug: 'bbl-3d-web',
      relatedPosts: [],
      tags: ['Formation', 'Evènement', 'Technique'],
      youtube: '',
    },
    {
      title: '🎉 Journée Mondiale des Développeurs 🎉',
      body: '',
      fullBody: '',
      imgUrl: '/assets/images/actus/sansurl.png',
      dateOfCreation: 'Mar 7, 2024',
      author: 'Hugues Dassonval',
      intro:
        "Pour la journée mondiales des développeurs, on met le code à l'honneur !",
      slug: 'bonne-fete-a-tous-les-developpeurs',
      relatedPosts: [],
      tags: ['Nouveauté'],
      youtube: '',
    },
    {
      title: 'BBL - 3D Web',
      body: '',
      fullBody:
        "Joseph et Sabrina, ont décidé de jouer avec les nerfs des Talosiens. 😶\n🍻 S\’amuser à modéliser une pinte en 3D pour l\’intégrer sur le web, une idée qui a réussi à piquer notre curiosité !\n💡 De la conception à l'intégration via Three.JS, chaque étape nous a poussé à repousser les limites de notre créativité et de notre expertise technique.\n🚀 On est fier de partager que les Talosiens ont relevé le défi avec brio, en intégrant de manière fluide et immersive cette pinte de bière. 🍺 Une prouesse technique qui témoigne de notre engagement envers l'innovation et l'excellence dans nos projets avec toujours une touche de fun.\n🌟 Une expérience qui permet de renforcer encore plus les liens au sein de la famille Talosi. 🤝\n🙌 Merci à tous les Talosiens qui ont participé à ce BBL récréatif.\nUn énorme merci à notre binôme d’animateur Joseph Bodard et Sabrina Kernouf. C'est grâce à des moments comme celui-ci qu'on continue à évoluer et à repousser les frontières de l'innovation. 😁\nEnvie de voir ce que ça rend ? Fonce la page d'accueil\n#BBL #3DWeb #ThreeJS #creativity",
      imgUrl: '/assets/images/actus/bbl-3d.jpeg',
      dateOfCreation: 'Mar 28, 2024',
      author: 'Kevin',
      intro: '😬 Frustration chez Talosi 🍕',
      slug: 'bbl-3d-web',
      relatedPosts: [],
      tags: ['Formation', 'Evènement', 'Technique'],
      youtube: '',
    },
    {
      title: '🎉 Journée Mondiale des Développeurs 🎉',
      body: '',
      fullBody: '',
      imgUrl: '/assets/images/actus/sansurl.png',
      dateOfCreation: 'Mar 7, 2024',
      author: 'Hugues Dassonval',
      intro:
        "Pour la journée mondiales des développeurs, on met le code à l'honneur !",
      slug: 'bonne-fete-a-tous-les-developpeurs',
      relatedPosts: [],
      tags: ['Nouveauté'],
      youtube: '',
    },
  ],
  itemPerPage = 5,
} = defineProps<{
  slug?: any
  pageNumber?: number
  _editable?: any
  postPerLine?: number
  active?: boolean
  posts?: Post[]
  itemPerPage?: number
}>()

const networks = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/talosi.official/?igshid=YmMyMTA2M2Y%3D',
  },
  { name: 'discord', link: 'https://discord.gg/pUhaNx4rHN' },
  {
    name: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=33756979222&text=Bonjour+Hello+de+Talosi%2C+je+te+contacte+suite+au+passage+sur+Talosi.com+&app_absent=0',
  },
  { name: 'linkedin', link: 'https://www.linkedin.com/company/talosi/' },
]

function toggleModal() {
  modal.value.open = !modal.value.open
}

const modal = ref({ open: false })
onMounted(() => useParallaxEffect().init())
const router = useRouter()
</script>

<template>
  <div class="actu-header">
    <div class="content gs_reveal hidden-text">
      <i class="talomoji-smile"></i>
      <h1 class="important">Retrouvez toute l'actualité Talosi</h1>
      <p>Des news, des infos, des vidéos</p>
    </div>

    <div class="row">
      <SocialIconsComponent
        class="gs_reveal gs_reveal_fromLeft hidden-text"
        :invertColor="true"
        :networks="networks"
      />
    </div>
  </div>
  <div class="container actualitiesList">
    <section id="actualities">
      <div class="filters gs_reveal gs_reveal_fromLeft hidden-text">
        <TagFilterComponent :title="' Filtre ta recherche '" />
      </div>
      <a @click="toggleModal()" class="filter-text"> Filtre ta recherche </a>
      <ModalComponent
        class="modal-filter"
        :class="modal.open ? 'active' : ''"
        :fullScreen="true"
      >
        <TagFilterComponent :title="' Filtre ta recherche '" />
        <ButtonComponent
          id="validate-filter"
          :block="true"
          @click="modal.open = false"
        >
          Valider
        </ButtonComponent>
      </ModalComponent>

      <div class="post-list gs_reveal gs_reveal_fromRight hidden-text">
        <NewsPostComponent
          v-for="post of posts"
          :postPerLine="postPerLine"
          :post="post"
          :displayFullBody="false"
          :activeLink="true"
          :showDetail="true"
          class="posts"
          @click="router.push('/actualites/' + post.slug)"
        />
        <h1 class="no-result" v-if="posts.length == 0">
          Oups ! Aucun résultat ne correspond à votre recherche.
        </h1>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';
@use '@/assets/css/fonts';
@use '@/assets/css/icons';

.actu-header {
  color: white;
  background: linear-gradient(to right, variables.$dark-blue, variables.$blue);
  text-align: center;
  padding: 50px;

  .social-icons .icon {
    height: 100px;
    width: 100px;
  }

  i {
    height: 100px;
    width: 100px;
  }

  .important,
  i,
  b {
    color: variables.$yellow;
  }

  p {
    font-size: 20px;
  }
}

.actualitiesList {
  margin-top: 10px;

  #actualities {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 20px;
    .individualPost {
      grid-template-columns: 2fr 5fr;
      margin-bottom: 20px;
      .imgActu {
        height: 270px;
      }
      .descriptionActu {
        padding: 8px;
      }
    }

    .post-list {
      .no-result {
        color: variables.$dark-blue;
      }
    }

    .filters {
      position: sticky;
      top: 100px;
      align-self: start;
    }

    .filter-text,
    .modal-filter {
      display: none;
    }
  }

  .content {
    text-align: center;
    position: relative;

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
      li {
        list-style-type: none;
      }
    }
  }
}

@include media.tablet {
  .actualitiesList {
    #actualities {
      margin-top: 40px;
      grid-template-columns: 1fr;
      .filters {
        position: initial;
        margin-bottom: 20px;
        ul {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          row-gap: 20px;
          margin-bottom: 0;
        }
      }
    }
  }
}

.hidden-text {
  opacity: 0;
}

@include media.large-mobile {
  .actualitiesList {
    #actualities {
      .filters {
        ul {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
}

@include media.mobile {
  .actualitiesList {
    .social {
      display: grid;
    }

    #actualities {
      margin-top: 40px;
      grid-template-columns: 1fr;

      .filters {
        display: none;
      }
      .filter-text,
      .modal-filter {
        display: initial;
      }
      .filter-text {
        color: black;
        font-weight: bolder;
        margin-bottom: 20px;
      }

      .individualPost {
        grid-template-columns: 1fr;
        margin-bottom: 20px;
        .imgActu {
          border-radius: 10px 10px 0 0;
        }
      }
    }
  }
}
</style>
