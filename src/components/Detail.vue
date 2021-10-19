<template>
  <div class="outer">
    <div class="inner">
      {{ detail }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    detail() {
      return this.$store.state.workspace.result;
    },
  },
  watch: {
    "$route.params.id"() {
      console.log(this.$route);
    },
  },
};
</script>

<style lang="scss" scoped>
.outer {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    background-color: white;
    width: 800px;
    height: 600px;
    border-radius: 15px;
  }
}
</style>
