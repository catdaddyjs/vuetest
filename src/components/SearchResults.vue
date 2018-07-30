<template>
  <div id="searchResults">
    <div v-for="result in searchResults">
      <result :result="result"></result>
    </div>
  </div>
</template>

<script>
  import Result from './Result.vue';

  export default {
    components: {
      'result': Result
    },
    computed: {
      searchResults() {
        return this.$store.state.searchResults;
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
