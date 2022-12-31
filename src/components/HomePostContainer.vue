<template>
  <div class="container bg-gray-200 px-5 py-1 space-x-0.5">
    <a class="font-bold text-sm" :href="url"
      >{{ title }}
      <span class="text-xs text-gray-600 font-bold hover:underline"
        >( {{ extractHostName }} )</span
      ></a
    >
    <div class="container flex justify-items-center text-xs">
      <div class="container text-gray-900 space-x-1">
        <span>{{ points }} points by</span>
        <span class="italic">{{ author }}</span> |
        <span>{{ numComments }} comments</span> |
        <span>Created at {{ createdAt }}</span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePostContainer",
  props: {
    title: String,
    author: String,
    numComments: Number,
    points: Number,
    url: String,
    createdAt: String,
  },
  computed: {
    extractHostName() {
      let url = new URL(this.url);
      return url.hostname + url.pathname;
    },
  },
};
</script>
