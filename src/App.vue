<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "HackerNews Clone";
      },
    },
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
