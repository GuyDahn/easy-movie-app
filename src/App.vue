<template>
  <div id="app">
    <h1>Top 20 Most Popular Movies</h1>
    <MovieList />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components: {
    MovieList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>