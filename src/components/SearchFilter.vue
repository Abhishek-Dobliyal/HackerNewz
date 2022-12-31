<template>
  <div class="ml-4 container">
    <div class="grid grid-cols-2 gap-2">
      <select
        class="form-select appearance-none block w-full px-3 py-1.5 text-sm text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option value="1" selected>Popularity</option>
        <option value="2">Date</option>
      </select>
      <select
        class="form-select appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option value="1" selected>All time</option>
        <option value="2">Past 1 Hour</option>
        <option value="3">Past 1 Day</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
};
</script>

<style></style>
