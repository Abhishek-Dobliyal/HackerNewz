<template>
  <div class="container mx-auto my-1">
    <HomeNavbar></HomeNavbar>
    <Spinner v-if="this.$store.getters.getPosts.length == 0"></Spinner>
    <div class="container p-2" v-else>
      <ul v-for="item in paginated" :key="item">
        <HomePostContainer
          :title="item.title"
          :author="item.author"
          :numComments="item.numComments"
          :points="item.points"
          :url="item.url"
          :createdAt="item.createdAt"
        ></HomePostContainer>
      </ul>

      <div class="flex rounded-md shadow-sm justify-center my-2" role="group">
        <button
          type="button"
          :class="`py-2 px-4 text-sm font-bold text-white bg-gray-500 rounded-l-lg ${
            isPrevDisabled ? 'disabled:opacity-50' : ''
          }`"
          @click="prev"
          :disabled="isPrevDisabled"
        >
          Prev
        </button>
        <button
          type="button"
          :class="`py-2 px-4 text-sm font-bold text-white bg-orange-500 rounded-r-lg border-l ${
            isNextDisabled ? 'disabled:opacity-50' : ''
          }`"
          @click="next"
          :disabled="isNextDisabled"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNavbar from "@/components/HomeNavbar.vue";
import HomePostContainer from "@/components/HomePostContainer.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    HomeNavbar,
    HomePostContainer,
    Spinner,
  },
  data() {
    return {
      current: 1,
      pageSize: 11,
    };
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.$store.getters.getPosts.slice(this.indexStart, this.indexEnd);
    },
    isPrevDisabled() {
      return this.current <= 1;
    },
    isNextDisabled() {
      return this.paginated.length < this.pageSize;
    },
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
  created() {
    axios.get(this.$store.getters.getHomePageApiURL).then((res) => {
      let totalPages = res.data.nbPages;
      this.$store.dispatch("fetchLatestPost", totalPages);
    });
  },
};
</script>
