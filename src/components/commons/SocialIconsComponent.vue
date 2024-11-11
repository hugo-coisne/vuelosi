<script setup lang="ts">
import { ref } from 'vue'

const networks = ref([
  { name: 'linkedin', link: 'https://www.linkedin.com/company/talosi/' },
  { name: 'discord', link: 'https://discord.gg/pUhaNx4rHN' },
  {
    name: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=33608153735&text=Bonjour+Hello+de+Talosi%2C+je+te+contacte+suite+au+passage+sur+Talosi.com+&app_absent=0',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/talosi.official/?igshid=YmMyMTA2M2Y%3D',
  },
])

const { invertColor = false, size = 'md' } = defineProps<{
  invertColor?: boolean
  size?: string
}>()
</script>

<template>
  <div class="social-icons">
    <div
      :class="'icon ' + size + ' ' + (invertColor ? 'inverse' : '')"
      v-for="network of networks"
    >
      <a :href="network.link" target="_blank" rel="nofollow">
        <img
          :src="`src/assets/svg/social/${network.name + (!invertColor ? '' : '_blue')}.svg`"
          :class="network.name"
          :alt="'logo ' + network.name"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';

.social-icons {
  display: flex;
  gap: 0.5rem;
  .icon {
    border-radius: 50%;
    background-color: variables.$blue;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
    a img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      object-fit: cover;
    }
    &:hover {
      background-color: variables.$dark-blue;
      color: variables.$yellow;
    }
    &.md {
      width: 50px;
      height: 50px;
      .instagram,
      .discord,
      .whatsapp,
      .linkedin {
        padding: 14px;
      }
    }
    &.sm {
      width: 40px;
      height: 40px;
      .instagram,
      .discord,
      .whatsapp,
      .linkedin {
        padding: 11px;
      }
    }
    &.inverse {
      background-color: white;
    }
  }
}
</style>
