<template>
  <header>
    <h1>Search Movie</h1>
    <h3>Press enter or Click find button</h3>
    <div>
      <input type="text" />
      <button>Find</button>
    </div>
  </header>
</template>

<script>
export default {
  created() {
    this.workspaceInit();
  },
  methods: {
    async workspaceInit() {
      await this.$store.dispatch("workspace/getMovies");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 10px 40px;
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
</style>
