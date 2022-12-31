<template>
  <div class="container mx-auto">
    <HomeNavbar></HomeNavbar>
    <div class="container p-2">
      <ul v-for="item in this.$store.getters.getPosts" :key="item">
        <HomePostContainer
          :title="item.title"
          :author="item.author"
          :numComments="item.numComments"
          :points="item.points"
          :url="item.url"
          :createdAt="item.createdAt"
        ></HomePostContainer>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeNavbar from "@/components/HomeNavbar.vue";
import HomePostContainer from "@/components/HomePostContainer.vue";

export default {
  name: "HomeView",
  components: {
    HomeNavbar,
    HomePostContainer,
  },
  mounted() {
    this.$store.dispatch("fetchLatestPost");
  },
};
</script>
