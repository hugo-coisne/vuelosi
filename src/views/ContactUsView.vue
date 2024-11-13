<script setup lang="ts">
import ContactFormComponent from '@/components/contact/ContactFormComponent.vue'
import InstantMessagingComponent from '@/components/contact/InstantMessagingComponent.vue'
</script>

<template>
  <section id="rejoin-us">
    <InstantMessagingComponent />
  </section>

  <section id="contact-form" class="row">
    <div>
      <ContactFormComponent />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#contact-form {
  text-align: center;
}
</style>
