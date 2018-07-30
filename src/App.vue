<template>
  <div id="app">
    <filter-area></filter-area>
    <search-results></search-results>
  </div>
</template>

<script>
  import FilterArea from './components/FilterArea.vue';
  import SearchResults from './components/SearchResults.vue';

  export default {
    components: {
      'filter-area': FilterArea,
      'search-results': SearchResults
    },
    created: function() {
      this.fetchData();
    },
    name: 'app',
    methods: {
      fetchData: function() {
        this.$store.dispatch('fetchMedia', 'https://gist.githubusercontent.com/memikequinn/475999c535ef4e1341f1262484244c68/raw/d77d0f6f4d7e53d7bf5dd7bd1997b27d291d4b0b/db.json');
      }
    }
}
</script>
