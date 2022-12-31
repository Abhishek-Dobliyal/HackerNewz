<template>
  <div class="container mx-auto my-1">
    <SearchNavbar></SearchNavbar>
    <div class="container w-80 flex items-center my-3 mx-3">
      <span class="font-bold text-sm">Sort With</span>
      <SearchFilter></SearchFilter>
    </div>
  </div>
</template>

<script>
import SearchNavbar from "@/components/SearchNavbar.vue";
import SearchFilter from "@/components/SearchFilter.vue";

export default {
  name: "SearchView",
  components: {
    SearchNavbar,
    SearchFilter,
  },
};
</script>
