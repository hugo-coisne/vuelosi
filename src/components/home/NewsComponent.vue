<script setup lang="ts">
import { Post } from '@/model/post'
import NewsPostComponent from '@/components/commons/NewsPostComponent.vue'
import TitleSectionComponent from '@/components/commons/TitleSectionComponent.vue'
import { useRouter } from 'vue-router'

const {
  postPerLine = 2,
  pageNumber = 0,
  active = true,
  posts = [
    {
      title: 'BBL - 3D Web',
      body: '',
      fullBody: '',
      imgUrl: '/assets/images/actus/bbl-3d.jpeg',
      dateOfCreation: '',
      author: '',
      intro: '',
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
      dateOfCreation: '',
      author: '',
      intro: '',
      slug: 'bonne-fete-a-tous-les-developpeurs',
      relatedPosts: [],
      tags: ['Nouveauté'],
      youtube: '',
    },
  ],
} = defineProps<{
  postPerLine?: number
  pageNumber?: number
  active?: boolean
  posts?: Post[]
}>()

const router = useRouter()
</script>

<template>
  <section id="actualities">
    <div class="container actuHeader">
      <TitleSectionComponent
        :title="'Les nouvelles'"
        :subtitle="'L\'actualité Talosi'"
      />
      <div class="actualities" v-if="active">
        <div class="post-list">
          <NewsPostComponent
            @click="router.push(`/actualites/${post.slug}`)"
            v-for="post of posts"
            :postPerLine="postPerLine"
            :post="post"
            :displayFullBody="false"
            :activeLink="true"
            :showDetail="false"
            class="posts"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/css/media';
@use '@/assets/css/variables';

.actualities {
  width: 100%;
  margin: 40px auto;

  .post-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    .individualPost {
      height: 100%;
      .imgActu {
        height: 100%;
        max-height: 270px;
      }
    }
  }
}

@include media.mobile {
  .actualities {
    .post-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
