<template>
  <div class="ml-4 container">
    <div class="flex justify-center items-center space-x-2 mx-2">
      <select
        @change="sortPostsByDate"
        class="form-select bg-gray-200 italic appearance-none block w-full px-3 py-1.5 text-sm text-gray-700 bg-clip-padding bg-no-repeat border-2 border-solid border-gray-300 rounded"
        aria-label="Default select example"
        v-model="searchFilters.sortBy"
      >
        <option value="" disabled>Select</option>
        <option value="1">Date</option>
      </select>
      <span class="font-bold">for</span>
      <select
        @change="sortPostsByTime"
        class="form-select bg-gray-200 italic appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-gray-300 rounded"
        aria-label="Default select example"
        v-model="searchFilters.timeStamp"
      >
        <option value="" disabled>Select</option>
        <option value="1">Past 1 Hour</option>
        <option value="2">Past 1 Day</option>
        <option value="3">Past Year</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  data() {
    return {
      searchFilters: {
        query: "",
        timeStamp: "",
        sortBy: "",
      },
    };
  },
  methods: {
    sortPostsByDate() {
      this.$store.getters.getSearchPosts.sort(function (p1, p2) {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
    },
    sortPostsByTime() {
      let searchPosts = this.$store.getters.getSearchPosts;
      let filtered = [];
      if (this.searchFilters.timeStamp == "1") {
        let oneHourToMiliSecs = 60 * 60 * 1000;
        filtered = searchPosts.filter(function (p) {
          return (
            new Date().getTime() - new Date(p.createdAt).getTime() <
            oneHourToMiliSecs
          );
        });
      } else if (this.searchFilters.timeStamp == "2") {
        let oneDayToMiliSecs = Math.round(8.64e7);
        filtered = searchPosts.filter(function (p) {
          return (
            new Date().getTime() - new Date(p.createdAt).getTime() <
            oneDayToMiliSecs
          );
        });
      } else {
        filtered = searchPosts.filter(function (p) {
          return (
            new Date().getFullYear() - new Date(p.createdAt).getFullYear() == 1
          );
        });
      }

      this.$store.commit("updatedSearchRecords", filtered);
    },
  },
};
</script>

<style></style>
