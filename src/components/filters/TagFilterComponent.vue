<script setup lang="ts">
const {
  tags = ['Welcome', 'Event', 'News', 'Technique', 'Formation', 'Associé'],
  title = '',
} = defineProps<{
  tags?: any[]
  title?: string
}>()
</script>

<template>
  <div class="tag-filters">
    <div class="card-filters">
      <h3 class="title">{{ title }}</h3>
      <ul>
        <li v-for="tag of tags">
          <label>
            <input
              type="checkbox"
              :checked="tag.checked"
              @change="$emit('filter', tag)"
            />
            #{{ tag }}
          </label>
        </li>
      </ul>
      <div class="search-input">
        <input
          type="text"
          @keyup="$emit('search')"
          placeholder="Rechercher..."
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables';

.tag-filters {
  .card-filters {
    background-color: variables.$backgroundGrey;
    border-radius: 10px;
    padding: 2rem;
    .title {
      color: variables.$dark-blue;
      border-bottom: 2px solid white;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    .filter-text {
      color: variables.$dark-blue;
    }
    .search-input {
      border-top: 2px solid white;
      padding-top: 16px;
    }
  }
}
</style>
