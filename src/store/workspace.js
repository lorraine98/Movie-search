import router from "~/routes/index";
export default {
  namespaced: true,
  state() {
    return {
      movies: [],
    };
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async getMovies({ commit }, payload) {
      const { title } = payload;
      const res = await _request({
        methods: "GET",
        title,
      });
      const movies = res?.Search ?? [];
      commit("assignState", {
        movies,
      });
    },
  },
};

async function _request(options) {
  try {
    const { methods, title } = options;
    return await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${title}`, {
      methods,
    }).then((res) => res.json());
  } catch (error) {
    alert(error.message);
  }
}
