<template>
  <div class="detail">
    <img class="detail__img" :src="getPosterUrl(detail)" />
    <span>
      <div class="detail__info">
        <h1>Title</h1>
        {{ detail.Title }}
        <h1>Year</h1>
        {{ detail.Year }}
        <h1>Released</h1>
        {{ detail.Released }}
      </div>
      <div>
        <h1>Runtime</h1>
        {{ detail.Runtime }}
        <h1>Genre</h1>
        {{ detail.Genre }}
      </div>
      <div>
        <h1>Director</h1>
        {{ detail.Director }}
        <h1>Actors</h1>
        {{ detail.Actors }}
      </div>
      <div>
        <h1>Plot</h1>
        {{ detail.Plot }}
      </div>
    </span>
    <button class="closeBtn" @click="closeDetail">X</button>
  </div>
</template>

<script>
import router from "~/routes";
export default {
  computed: {
    detail() {
      return this.$store.state.workspace.result;
    },
  },
  methods: {
    getPosterUrl(detail) {
      return detail.Poster;
    },
    closeDetail() {
      router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    margin-right: 30px;
    box-shadow: 0px 0px 5px gray;
    border-radius: 15px;
  }
  &__info {
    display: flex;
    align-items: center;
    h1 {
      margin: 0 20px;
    }
  }
}
.closeBtn {
  position: absolute;
  font-size: 30px;
  right: 30px;
  top: 30px;
}
</style>
