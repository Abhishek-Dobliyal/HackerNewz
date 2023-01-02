<template>
  <nav class="bg-orange-400 h-11 rounded-sm">
    <div class="max-w-screen px-2 py-2">
      <div class="flex items-center">
        <ul class="flex flex-row mr-6 space-x-8">
          <li>
            <a href="/" class="text-black font-bold" aria-current="page"
              >HackerNewz</a
            >
          </li>
          <li>
            <a
              class="text-black hover:underline text-sm cursor-pointer"
              @click="this.$router.push('/')"
              aria-current="page"
              >News</a
            >
          </li>
          <span>|</span>
          <li>
            <a
              @click="this.$router.push('/search')"
              class="text-black hover:underline text-sm cursor-pointer"
              >Search</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HomeNavbar",
};
</script>
