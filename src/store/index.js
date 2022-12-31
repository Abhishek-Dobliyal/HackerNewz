import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    homePageApi: "https://hn.algolia.com/api/v1/search?tags=front_page&page=",
    searchPageApi: "https://hn.algolia.com/api/v1/search?tags=front_page&page=",
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getHomePageApiURL(state) {
      return state.homePageApi;
    },
    getSearchPageApiURL(state) {
      return state.searchPageApi;
    },
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload);
    },
  },
  actions: {
    fetchLatestPost(state, totalPages) {
      for (let page = 1; page <= totalPages; page++) {
        axios.get(this.getters.getHomePageApiURL + page).then((res) => {
          let fetchedPosts = res.data.hits;
          console.log(page);
          for (const post of fetchedPosts) {
            let currPost = {};
            currPost["title"] = post.title || "No Title";
            currPost["url"] = post.url;
            currPost["numComments"] = post.num_comments || 0;
            currPost["points"] = post.points || 0;
            currPost["createdAt"] = post.created_at;
            currPost["author"] = post.author;

            state.commit("addPost", currPost);
          }
        });
      }
    },
  },
  modules: {},
});
