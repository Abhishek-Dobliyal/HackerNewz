import { createStore } from "vuex";
import axios from "axios";

const api =
  "https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=2";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload);
    },
  },
  actions: {
    fetchLatestPost(state) {
      axios.get(api).then((res) => {
        let fetchedPosts = res.data.hits;

        for (const post of fetchedPosts) {
          let currPost = {};
          currPost["title"] = post.title;
          currPost["url"] = post.url;
          currPost["numComments"] = post.num_comments;
          currPost["points"] = post.points;
          currPost["createdAt"] = post.created_at;
          currPost["author"] = post.author;

          state.commit("addPost", currPost);
        }
      });
    },
  },
  modules: {},
});
