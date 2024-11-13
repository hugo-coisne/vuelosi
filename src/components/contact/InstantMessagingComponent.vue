<script setup lang="ts">
import { useParallaxEffect } from '@/composables/paralax'
import { onMounted } from 'vue'

const networks: any[] = [
  {
    name: 'discord',
    link: 'https://discord.gg/pUhaNx4rHN',
  },
  {
    name: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=33608153735&text=Bonjour+Hello+de+Talosi%2C+je+te+contacte+suite+au+passage+sur+Talosi.com+&app_absent=0',
  },
]
onMounted(() => useParallaxEffect().init())
</script>

<template>
  <div class="instant-messaging">
    <div class="content gs_reveal hidden-text">
      <i class="talomoji-clindoeil"></i>
      <h1>
        Envie de <span class="important">nous rejoindre</span> ou juste nous
        parler de vos projets ?
      </h1>
      <p>N'hésitez pas à nous contacter</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/icons';

.instant-messaging {
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
    font-size: 25px;
  }
}

.hidden-text {
  opacity: 0;
}
</style>
