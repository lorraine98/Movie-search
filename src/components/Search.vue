<template>
  <header>
    <h1>Search Movie</h1>
    <h3>Press enter or Click find button</h3>
    <div class="search">
      <input type="text" ref="inputTitle" @keyup.enter="getMovies" />
      <button @click.prevent="getMovies">Find</button>
    </div>
  </header>
  <ul class="movies">
    <li
      class="movie"
      v-for="movie in movies"
      :key="movie.imdbID"
      @click="showResult(movie.imdbID)"
    >
      <img class="movie__img" :src="getPosterUrl(movie)" />
      <span>
        {{ movie.Title }}
        {{ movie.Year }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.workspace.movies;
    },
  },
  methods: {
    getMovies() {
      this.$store.dispatch("workspace/getMovies", {
        title: this.$refs.inputTitle.value,
      });
    },
    getPosterUrl(movie) {
      return movie.Poster;
    },
    showResult(id) {
      this.$store.dispatch("workspace/showResult", id);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  .search {
    display: flex;
    justify-content: center;
    input {
      font-size: 30px;
      margin-right: 20px;
    }
    button {
      padding: 12px 20px;
      background-color: cadetblue;
      border: none;
      border-radius: 5px;
      &:hover {
        transition: background-color 0.5s;
        background-color: rgba(95, 158, 160, 0.5);
      }
    }
  }
}
.movies {
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  .movie {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    font-size: 20px;
    overflow-x: hidden;
    &__img {
      border-radius: 15px;
      width: 300px;
      height: 420px;
      object-fit: cover;
      box-shadow: 0px 0px 5px gray;
      &:hover {
        opacity: 0.5;
        transition: opacity 0.2s;
      }
    }
  }
}
</style>
