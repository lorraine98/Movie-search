<template>
  <header>
    <h1>Search Movie</h1>
    <h3>Press enter or Click find button</h3>
    <div class="search">
      <input type="text" ref="inputTitle" @keyup.enter="getMovies" />
      <button @click.prevent="getMovies">Find</button>
    </div>
  </header>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
      <img :src="getPosterUrl(movie)" />
      {{ movie.Title }}
      {{ movie.Year }}
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
</style>
