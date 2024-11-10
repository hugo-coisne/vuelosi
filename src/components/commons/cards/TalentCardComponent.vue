<script setup lang="ts">
import type { Talent } from '@/model/Talent'

const { talent } = defineProps<{
  talent: Talent
}>()
</script>

<template>
  <div class="card-container">
    <div class="card talent-card">
      <div class="card-infos">
        <div class="img-talent">
          <img
            class="img-fluid profile-img"
            :src="talent.image"
            alt="Portrait de {{talent.firstname}}, {{ talent.job }} chez Talosi"
          />
          <div class="frame">
            <img
              class="img-frame"
              src="@/assets/calques/back-talent.png"
              alt="Cadre Talent Talosi"
            />
          </div>
        </div>

        <h2>{{ talent.firstname }}</h2>
        <span class="role">{{ talent.job }}</span>
        <div class="separator"></div>
        <div class="infos">
          <div v-for="role of talent.roles">
            <i class="talomoji-clindoeil"></i>
            <div class="skills">
              <span class="title"> {{ role.name }} </span>
              <span class="tags">{{ role.tags }}</span>
            </div>
          </div>
        </div>
        <div class="technos">
          <div>
            <i v-for="techno of talent.technos" :class="'techno-' + techno"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/icons';

.talent-card {
  min-height: 400px;
  border: 3px solid white;
  background: linear-gradient(135deg, variables.$dark-blue, variables.$blue);
  padding: 1.5rem;
  .card-infos {
    display: grid;
    width: 100%;
    background: none;
    .img-talent {
      position: relative;
      display: inline-block;

      .profile-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        align-self: center;
        justify-self: center;
        object-fit: cover;
      }
      .frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid white;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        .img-frame {
          width: 100%;
          height: 30%;
        }
      }
    }

    h2 {
      color: variables.$yellow;
    }
    .role {
      color: white;
      font-size: 14px;
    }
    .separator {
      width: 25%;
      border: 1px solid variables.$yellow;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .infos {
      padding-bottom: 30px;
      div {
        display: grid;
        grid-template-columns: 40px auto;
        margin-top: 0.1rem;
        padding-bottom: 0.2rem;
        i,
        b {
          grid-column: 1 / 2;
          height: 25px;
          width: 25px;
          color: variables.$yellow;
        }
        .skills {
          grid-column: 2 / 3;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          .title {
            color: variables.$yellow;
            font-weight: bold;
          }
          .tags {
            color: white;
          }
        }
      }
    }
    .technos {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      left: 0px;

      position: absolute;
      bottom: 15px;
      margin-top: 1.5rem;
      i,
      b {
        height: 30px;
        width: 30px;
        color: variables.$yellow;
        margin-right: 1rem;
      }
    }
  }
}
</style>
