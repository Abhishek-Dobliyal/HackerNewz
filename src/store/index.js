import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    homePosts: [],
    searchPosts: [],
    searchPostsCopy: [],
    urls: {
      homePageApi: "https://hn.algolia.com/api/v1/search?tags=front_page&page=",
      searchPageApi: "https://hn.algolia.com/api/v1/search?page=",
    },
  },
  getters: {
    getHomePosts(state) {
      return state.homePosts;
    },
    getSearchPosts(state) {
      return state.searchPosts;
    },
    getUrls(state) {
      return state.urls;
    },
    getSearchPostsCopy(state) {
      return state.searchPostsCopy;
    },
  },
  mutations: {
    addHomePost(state, payload) {
      state.homePosts.push(payload);
    },
    addSearchPost(state, payload) {
      state.searchPosts.push(payload);
    },
    updatedSearchRecords(state, payload) {
      state.searchPosts = payload.length > 0 ? payload : state.searchPostsCopy;
    },
    addPostToCopy(state, payload) {
      state.searchPostsCopy.push(payload);
    },
  },
  actions: {
    fetchPosts(state, postFor) {
      let url = postFor
        ? this.getters.getUrls.homePageApi
        : this.getters.getUrls.searchPageApi;
      let addPost = postFor ? "addHomePost" : "addSearchPost";

      axios.get(url).then((res) => {
        let totalPages = res.data.nbPages;

        for (let page = 1; page <= totalPages; page++) {
          axios.get(url + page).then((res) => {
            let fetchedPosts = res.data.hits;
            for (const post of fetchedPosts) {
              let currPost = {};
              currPost["title"] = post.title || "No Title";
              currPost["url"] = post.url;
              currPost["numComments"] = post.num_comments || 0;
              currPost["points"] = post.points || 0;
              currPost["createdAt"] = post.created_at;
              currPost["author"] = post.author;

              state.commit(addPost, currPost);
              if (postFor == 0) {
                state.commit("addPostToCopy", currPost);
              }
            }
          });
        }
      });
    },
  },
  modules: {},
});
