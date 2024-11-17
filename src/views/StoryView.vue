<script setup lang="ts">
import ButtonComponent from '@/components/commons/ButtonComponent.vue'
import NewsPostComponent from '@/components/commons/NewsPostComponent.vue'
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'
import { computed } from 'vue'

const {
  maxBodyChar = 50,
  postPerLine = 1,
  slug = '',
} = defineProps<{
  maxBodyChar?: number
  postPerLine?: number
  slug?: string
  postWidth?: number
}>()
const postWidth = computed(() => 100 / postPerLine)

const post = {
  title: 'BBL - 3D Web',
  body: '',
  fullBody:
    '<a href="https://www.linkedin.com/in/joseph-bodard-5a38258a/" target="_self" linktype="url"><span style="color:rgba(0, 0, 0, 0.9)">Joseph</span></a><span style="color:rgba(0, 0, 0, 0.9)"> et </span><a href="https://www.linkedin.com/in/sabrina-kernouf/" target="_self" linktype="url"><span style="color:rgba(0, 0, 0, 0.9)">Sabrina</span></a><span style="color:rgba(0, 0, 0, 0.9)">, ont décidé de jouer avec les nerfs des Talosiens.  </span><span data-type="emoji" data-name="no_mouth" emoji="😶">😶</span> <span style="color:rgba(0, 0, 0, 0.9)"><br></span><span data-type="emoji" data-name="beers" emoji="🍻">🍻</span> <span style="color:rgba(0, 0, 0, 0.9)">S’amuser à modéliser une pinte en 3D pour l’intégrer sur le web, une idée qui a réussi à piquer notre curiosité !</span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span data-type="emoji" data-name="bulb" emoji="💡">💡</span> <span style="color:rgba(0, 0, 0, 0.9)">De la conception à l\'intégration via Three.JS, chaque étape nous a poussé à repousser les limites de notre créativité et de notre expertise technique.</span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span data-type="emoji" data-name="rocket" emoji="🚀">🚀</span> <span style="color:rgba(0, 0, 0, 0.9)">On est fier de partager que les Talosiens ont relevé le défi avec brio, en intégrant de manière fluide et immersive cette pinte de bière. </span><span data-type="emoji" data-name="beer" emoji="🍺">🍺</span> <span style="color:rgba(0, 0, 0, 0.9)">Une prouesse technique qui témoigne de notre engagement envers l\'innovation et l\'excellence dans nos projets avec toujours une touche de fun. </span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span data-type="emoji" data-name="star2" emoji="🌟">🌟</span> <span style="color:rgba(0, 0, 0, 0.9)">Une expérience qui permet de renforcer encore plus les liens au sein de la famille Talosi. </span><span data-type="emoji" data-name="handshake" emoji="🤝">🤝</span> <span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span data-type="emoji" data-name="raised_hands" emoji="🙌">🙌</span> <span style="color:rgba(0, 0, 0, 0.9)">Merci à tous les Talosiens qui ont participé à ce BBL récréatif.</span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)">Un énorme merci à notre binôme d’animateur </span><a href="https://www.linkedin.com/in/joseph-bodard-5a38258a/" linktype="url">Joseph Bodard</a><span style="color:rgba(0, 0, 0, 0.9)"> et </span><a href="https://www.linkedin.com/in/sabrina-kernouf/" linktype="url">Sabrina Kernouf</a><span style="color:rgba(0, 0, 0, 0.9)">. C\'est grâce à des moments comme celui-ci qu\'on continue à évoluer et à repousser les frontières de l\'innovation. </span><span data-type="emoji" data-name="grin" emoji="😁">😁</span> <span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)">Envie de voir ce que ça rend ? Fonce la page d\'</span><a href="/" target="_self" linktype="url"><span style="color:rgba(0, 0, 0, 0.9)">accueil </span></a><span style="color:rgba(0, 0, 0, 0.9)"><br></span><span style="color:rgba(0, 0, 0, 0.9)"><br></span><a href="https://www.linkedin.com/feed/hashtag/?keywords=bbl&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">hashtag#</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=bbl&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">BBL</a><span style="color:rgba(0, 0, 0, 0.9)"> </span><a href="https://www.linkedin.com/feed/hashtag/?keywords=3dweb&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">hashtag#</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=3dweb&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">3DWeb</a><span style="color:rgba(0, 0, 0, 0.9)"> </span><a href="https://www.linkedin.com/feed/hashtag/?keywords=threejs&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">hashtag#</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=threejs&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">ThreeJS</a><span style="color:rgba(0, 0, 0, 0.9)"> </span><a href="https://www.linkedin.com/feed/hashtag/?keywords=creativity&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">hashtag#</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=creativity&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7179134509643177986" linktype="url">creativity</a></p></span>',
  imgUrl: '/assets/images/actus/bbl-3d.jpeg',
  dateOfCreation: 'Mar 28, 2024',
  author: 'Kevin',
  intro: '😬 Frustration chez Talosi 🍕',
  slug: 'bbl-3d-web',
  relatedPosts: [
    {
      title: 'BBL - 3D Web',
      body: '',
      fullBody:
        "Joseph et Sabrina, ont décidé de jouer avec les nerfs des Talosiens. 😶<br>🍻 S\’amuser à modéliser une pinte en 3D pour l\’intégrer sur le web, une idée qui a réussi à piquer notre curiosité !<br>💡 De la conception à l'intégration via Three.JS, chaque étape nous a poussé à repousser les limites de notre créativité et de notre expertise technique.<br>🚀 On est fier de partager que les Talosiens ont relevé le défi avec brio, en intégrant de manière fluide et immersive cette pinte de bière. 🍺 Une prouesse technique qui témoigne de notre engagement envers l'innovation et l'excellence dans nos projets avec toujours une touche de fun.<br>🌟 Une expérience qui permet de renforcer encore plus les liens au sein de la famille Talosi. 🤝<br>🙌 Merci à tous les Talosiens qui ont participé à ce BBL récréatif.<br>Un énorme merci à notre binôme d’animateur Joseph Bodard et Sabrina Kernouf. C'est grâce à des moments comme celui-ci qu'on continue à évoluer et à repousser les frontières de l'innovation. 😁<br>Envie de voir ce que ça rend ? Fonce la page d'accueil<br>#BBL #3DWeb #ThreeJS #creativity",
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
      title: 'BBL - 3D Web',
      body: '',
      fullBody:
        "Joseph et Sabrina, ont décidé de jouer avec les nerfs des Talosiens. 😶<br>🍻 S\’amuser à modéliser une pinte en 3D pour l\’intégrer sur le web, une idée qui a réussi à piquer notre curiosité !<br>💡 De la conception à l'intégration via Three.JS, chaque étape nous a poussé à repousser les limites de notre créativité et de notre expertise technique.<br>🚀 On est fier de partager que les Talosiens ont relevé le défi avec brio, en intégrant de manière fluide et immersive cette pinte de bière. 🍺 Une prouesse technique qui témoigne de notre engagement envers l'innovation et l'excellence dans nos projets avec toujours une touche de fun.<br>🌟 Une expérience qui permet de renforcer encore plus les liens au sein de la famille Talosi. 🤝<br>🙌 Merci à tous les Talosiens qui ont participé à ce BBL récréatif.<br>Un énorme merci à notre binôme d’animateur Joseph Bodard et Sabrina Kernouf. C'est grâce à des moments comme celui-ci qu'on continue à évoluer et à repousser les frontières de l'innovation. 😁<br>Envie de voir ce que ça rend ? Fonce la page d'accueil<br>#BBL #3DWeb #ThreeJS #creativity",
      imgUrl: '/assets/images/actus/bbl-3d.jpeg',
      dateOfCreation: 'Mar 28, 2024',
      author: 'Kevin',
      intro: '😬 Frustration chez Talosi 🍕',
      slug: 'bbl-3d-web',
      relatedPosts: [],
      tags: ['Formation', 'Evènement', 'Technique'],
      youtube: '',
    },
  ],
  tags: ['Formation', 'Evènement', 'Technique'],
  youtube: '',
}
</script>

<template>
  <div v-if="post != null">
    <div class="container actualities">
      <ButtonComponent :routerLink="'/actualites'" id="backToTheBlog"
        >retour au blog</ButtonComponent
      >
      <div class="actuHeader gs_reveal gs_reveal_fromLeft hidden-text">
        <TitleSectionComponent
          :subtitle="'L\'actualité talosi'"
          :title="'Les nouvelles'"
        />
      </div>
      <div>
        <div class="till">
          <img
            src="/assets/svg/tillsets/fresque.svg"
            class="fresque right rotate"
            alt="fresque"
          />
        </div>
        <div class="posts">
          <NewsPostComponent
            :postPerLine="postPerLine"
            :post="post"
            :displayFullBody="true"
            :showDetail="true"
            :style="
              'flex : 1 1 ' +
              postWidth +
              '%; min-width :' +
              postWidth +
              '%; max-width :' +
              postWidth +
              '%;'
            "
          />
        </div>
      </div>
    </div>
    <div
      class="related_post"
      v-if="post.relatedPosts && post.relatedPosts?.length > 0"
    >
      <h1 class="gs_reveal gs_reveal_fromLeft hidden-text">
        Les articles qui peuvent vous intéresser :
      </h1>
      <div class="container related_post--list gs_reveal hidden-text">
        <NewsPostComponent
          v-for="posti of post.relatedPosts"
          :postPerLine="postPerLine"
          :post="posti"
          :displayFullBody="false"
          :activeLink="true"
          :appCustomRouterLink="'/actualites/' + posti.slug"
          :showDetail="false"
          class="posts"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';
@use '@/assets/css/fonts';
@use '@/assets/css/breakpoints';

.actualities {
  background: transparent;
  margin-top: 50px;
  .posts .individualPost {
    margin-bottom: 60px;
    border: none;
    cursor: auto;
    background: transparent;
    .descriptionActu {
      align-self: self-start !important;
    }
    .imgActu {
      border-radius: 10px !important;
    }
    .descriptionActu {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
  }
  .till {
    .right {
      right: -175px;
    }
    .fresque {
      top: -175px;
    }
    .rotate {
      transform: rotate(270deg);
      z-index: -1;
    }
  }
}

.hidden-text {
  opacity: 0;
}

.related_post {
  background-color: variables.$light-grey;
  padding: 60px 0 60px 0;
  h1 {
    text-align: center;
    margin-bottom: 60px;
    color: variables.$dark-blue;
  }
  &--list {
    display: grid;
    column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    .posts .individualPost .imgActu {
      max-height: 207px;
    }
  }
}

@include media.large-mobile {
  .actualities {
    .posts .individualPost {
      display: grid;
      grid-template-columns: 1fr;
      img {
        margin-bottom: 20px;
      }
    }
  }

  .related_post {
    &--list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      .individualPost {
        .imgActu {
          height: 100%;
          max-height: 120px;
        }
      }
    }
  }
}
</style>
