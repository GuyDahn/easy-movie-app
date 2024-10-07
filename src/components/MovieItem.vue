<template>
    <div class="movie-item">
      <img 
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" 
        :alt="movie.title" 
        class="movie-poster"
      />
      <h2>{{ movie.title }}</h2>
      <p>Release Date: {{ movie.release_date }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieItem',
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-item {
    width: 200px;
    text-align: center;
  }
  
  .movie-poster {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  h2 {
    font-size: 18px;
    margin: 10px 0;
  }
  </style>
  