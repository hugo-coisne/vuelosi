<script setup lang="ts">
defineProps<{ itemLD: { [key: string]: any } }>()

function getSafeHTML(jsonLD: { [key: string]: any }) {
  const json = jsonLD
    ? JSON.stringify(jsonLD, null, 2).replace(/<\/script>/g, '<\/script>')
    : '' // escape / to prevent script tag in JSON
  return json
}
</script>

<template>
  <component :is="'script'" type="application/ld+json">{{ getSafeHTML(itemLD) }}</component>
</template>
