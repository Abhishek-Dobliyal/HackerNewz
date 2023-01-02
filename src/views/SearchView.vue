<template>
  <div class="container mx-auto my-1">
    <SearchNavbar></SearchNavbar>
    <div class="container w-80 flex items-center my-3 mx-3">
      <span class="font-bold text-sm">Sort By</span>
      <SearchFilter></SearchFilter>
    </div>
    <Spinner v-if="paginated.length == 0"></Spinner>
    <div class="container p-2" v-else>
      <ul v-for="item in paginated" :key="item">
        <PostContainer
          :title="item.title"
          :author="item.author"
          :numComments="item.numComments"
          :points="item.points"
          :url="item.url"
          :createdAt="item.createdAt"
        ></PostContainer>
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
import SearchNavbar from "@/components/SearchNavbar.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import PostContainer from "@/components/PostContainer.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "SearchView",
  components: {
    SearchNavbar,
    SearchFilter,
    PostContainer,
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
      return this.$store.getters.getSearchPosts.slice(
        this.indexStart,
        this.indexEnd
      );
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
    this.$store.dispatch("fetchPosts", 0); // 0 for Search
  },
};
</script>
