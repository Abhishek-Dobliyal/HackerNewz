<template>
  <nav class="bg-orange-400 rounded-sm flex items-center">
    <div class="max-w-screen px-2 py-2">
      <div class="flex items-center mx-auto">
        <ul class="flex flex-row space-x-5 items-center">
          <li>
            <span class="text-black font-bold" aria-current="page"
              >Search HackerNews Clone</span
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
                />
              </div>
              <button
                class="btn inline-block px-2.5 py-2 border border-gray-400 text-gray-500 text-xs font-bold rounded bg-white ml-3"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
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
};
</script>
