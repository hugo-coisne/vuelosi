<script setup lang="ts">
import { useParallaxEffect } from '@/composables/paralax'
import { Post } from '@/model/post'
import { onMounted } from 'vue'

const {
  activeLink = false,
  postPerLine = 2,
  displayFullBody = false,
  showDetail = false,
} = defineProps<{
  post: Post
  activeLink?: boolean
  postPerLine?: number
  displayFullBody?: boolean
  showDetail?: boolean
}>()

function getYouTubeEmbedUrl(videoLink: string) {
  const videoId = getYouTubeVideoId(videoLink)
  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  return embedUrl
}

function getYouTubeVideoId(videoLink: string): string {
  const videoId = videoLink?.split('v=')[1]
  return videoId ? videoId : ''
}

onMounted(() => useParallaxEffect().init())
</script>

<template>
  <div class="individualPost" v-if="post.title != ''">
    <img
      v-if="post?.imgUrl !== null"
      :src="post.imgUrl"
      alt="Img Post"
      class="imgActu"
    />
    <iframe
      v-if="post.imgUrl == ''"
      class="imgActu gs_reveal gs_reveal_fromLeft"
      preload="auto"
      width="425px"
      height="425px"
      borderradius="10px"
      :src="getYouTubeEmbedUrl(post.youtube)"
      title="YouTube video Talosi"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="descriptionActu">
      <ul>
        <li v-for="tag of post.tags">#{{ tag }}</li>
      </ul>

      <h1 class="titreActu coupureText" v-if="displayFullBody">
        {{ post.title }}
      </h1>
      <h2 class="titreActu coupureText" v-else>{{ post.title }}</h2>

      <div v-if="showDetail">
        <p v-if="post?.author?.length !== 0" class="author">
          écrit le : {{ post.dateOfCreation }} par {{ post.author }}
        </p>
        <p class="author" v-else>écrit le : {{ post.dateOfCreation }}</p>

        <p v-if="!displayFullBody" v-html="post.intro"></p>
        <span v-if="displayFullBody" class="body-post" v-html="post.fullBody">
        </span>
      </div>
      <RouterLink
        v-if="activeLink"
        class="link"
        :to="`/actualites/${post.slug}`"
        >Lire la suite >
      </RouterLink>
      <template v-else> <br /><br /> </template>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';
@use '@/assets/css/fonts';
@use '@/assets/css/breakpoints';
@use '@/assets/css/underline';

.individualPost {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 15px;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr;
  column-gap: 20px;
  cursor: pointer;
  background-color: white;
  .imgActu {
    width: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }

  .titreActu {
    text-align: left;
    font-weight: bold;
    color: variables.$blue;
    font-size: 1.5rem;
    width: auto;
    margin-bottom: 0;
  }

  .link {
    color: black;
    text-decoration: underline;
    font-weight: bolder;
  }

  .link:hover {
    cursor: pointer;
    text-decoration: underline;
    color: variables.$blue;
  }

  .author {
    font-size: smaller;
    text-align: left;
  }

  .descriptionActu {
    align-self: center;
    text-align: left;
    .body-post {
      overflow: hidden;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
      li {
        display: inline;
        margin-right: 10px;
      }
    }
  }
}

@include media.mobile {
  .actualities {
    .posts {
      .actu {
        width: 100%;

        .imgActu {
          width: 95%;
        }

        .titreActu {
          font-size: 0.75rem;
          width: 100%;
        }

        .descriptionActu {
          font-size: 0.5rem;
          width: 100%;
        }

        .hrTitle {
          border: 1.5px;
        }
      }
    }
  }
}
</style>
