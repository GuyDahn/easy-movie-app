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
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
  }
  
  .movie-item {
    flex: 1 1 200px; 
    max-width: 200px;
  }
  
  @media (max-width: 700px) {
    .movie-item {
      flex: 1 1 150px; 
      max-width: 150px;
    }
  }

  @media (max-width: 380px) {
    .movie-item {
      flex: 1 1 150px; 
      max-width: 120px;
    }
  }
  </style>