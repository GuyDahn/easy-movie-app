<template>
    <div class="movie-list">
      <MovieItem 
        v-for="movie in movies" 
        :key="movie.id" 
        :movie="movie"
      />
    </div>
  </template>
  
  <script>
  import { getMovies } from '../services/movieService';
  import MovieItem from './MovieItem.vue';
  
  export default {
    name: 'MovieList',
    components: { MovieItem },
    data() {
      return {
        movies: [],
      };
    },
    async created() {
      this.movies = await getMovies();
    },
  };
  </script>
  
  <style scoped>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>