<template>
  <div id="filter">
    <h2>Filter</h2>
    <md-field class="medium">
      <label>Filter Results</label>
      <md-input v-model="query" v-on:change="search"></md-input>
    </md-field>

    <md-button v-on:click="filter('asc')" class="md-primary">Sort A - Z</md-button>
    <md-button v-on:click="filter('desc')" class="md-primary">Sort Z - A</md-button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    methods: {
      search: function(event) {
        this.$store.dispatch('search', event.target.value);
      },
      filter: function(dir) {
        this.$store.dispatch('filter', dir);
      }
    },

    data: () => {
      return {
        query: ''
      }
    }
  }
</script>

<style scoped>
  input {
    /* patch for a weird theming bug I ran into */
    border: 1px solid #e2e2e2 !important;
  }

  .medium {
    width: 35%;
  }

  .md-primary {
    background: #304FFE;
  }
</style>
