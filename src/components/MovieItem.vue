<template>
    <div class="movie-item">
      <img 
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" 
        :alt="movie.title" 
        class="movie-poster"
      />
      <h2>{{ movie.title }}</h2>
      <p class="date-field">Release Date: {{ movie.release_date }}</p>
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
  text-align: center;
}

.movie-poster {
  width: 100%; /* Responsive image */
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: rgb(255, 255, 0);
}

p {
  font-size: 1rem;
  color: rgb(255, 255, 0);
}
  </style>
  