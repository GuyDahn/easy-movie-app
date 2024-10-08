<template>
  <div id="app">
    <header class="app-header">
      <h1>Top 20 Most Popular Movies</h1>
      <p>Home assignmet in Vue for Easy(.co.il). this app is made to look like blockbuster</p>

    </header>
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
.app-header {
  color: white;
  text-align: center;
  padding: 10px 0;
  color: rgb(255, 255, 0);
}

h1 {
  font-size: 2rem;
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  background-color: blue;
}

.movie-item h2 {
  font-size: 1.4rem;
}

.movie-item p {
  font-size: 1rem;
}

h2 {
  font-size: 1.5rem; 
}

p {
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(255, 255, 0);
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }

  .movie-item h2 {
    font-size: 1.2rem;
  }

  .movie-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 700px) {
  body {
    font-size: 12px;
  }

  .movie-item h2 {
    font-size: 1rem;
  }

  .movie-item p {
    font-size: 0.8rem;
  }

  .movie-list {
    padding: 10px;
  }
}
@media (max-width: 400px) {
  body {
    font-size: 10px;
  }

  .movie-item h2 {
    font-size: 0.8rem;
  }

  .movie-item p {
    font-size: 0.7rem;
  }

  .movie-list {
    padding: 5px;
  }
}
</style>