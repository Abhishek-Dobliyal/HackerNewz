<template>
  <nav class="bg-orange-400 rounded-sm flex items-center">
    <div class="max-w-screen px-2 py-2">
      <div class="flex items-center mx-auto">
        <ul class="flex flex-row space-x-5 items-center">
          <li>
            <span class="text-black font-bold" aria-current="page"
              >Search HackerNews</span
            >
          </li>
          <li>
            <div class="xl:w-96 flex">
              <div
                class="input-group relative flex flex-wrap items-stretch w-full"
              >
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full md:w-auto px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                  placeholder="Search stories here..."
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  v-model="query"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SearchNavbar",
  data() {
    return {
      query: "",
    };
  },
  updated() {
    if (this.query.length == 0) {
      this.$store.commit("updatedSearchRecords", []);
      return;
    }
    let filtered = [];
    console.log(this.query.split(" "));
    for (let q of this.query.split(" ")) {
      let curr = this.$store.getters.getSearchPostsCopy.filter(function (p) {
        return (
          p.author.toLowerCase().includes(q.toLowerCase()) ||
          p.title.toLowerCase().includes(q.toLowerCase())
        );
      });
      if (curr.length > 0) {
        filtered.push(...curr)
      }
    }

    this.$store.commit("updatedSearchRecords", filtered);
  },
};
</script>
