<script setup lang="ts"></script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div class="tag-filters">
    <div class="search-input">
      <div class="search">
        <span class="form-element">
          <span class="fa fa-search icon"></span>
          <input
            type="text"
            @keyup="$emit('search')"
            placeholder="Rechercher une formation..."
          />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/media';
@use '@/assets/css/variables';

input[type="text"] {
  width: 100%;
  border-radius: 50px;
  padding: 10px 15px;
  font-style: italic;
  font-weight: 520;
}

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
      width: 30%;
    }
    .search-bar {
      border-radius: 50px;
      padding: 10px 15px;
    }
  }
}

.search {
  color: variables.$shadow-light-grey;
}

.form-element {
  position: relative;
}

.search input {
  text-indent: 1em;
}

.search .fa-search {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.icon {
  color: dimgrey;
  padding-right: 5px;
  font-size: 25px;
  margin-top: -4px;
}

.search-icon {
  bottom: 12px;
  left: 180px;
  width: 10px;
  height: 10px;
}

@include media.tablet {
  input {
    width: 90%;
    font-size: smaller;
  }
}

@include media.small-tablet {
  input {
    width: 55%;
  }
}

@include media.large-mobile {
  input {
    width: 70%;
  }
}

@include media.mobile {
  input {
    width: 100%;
  }
}
</style>
