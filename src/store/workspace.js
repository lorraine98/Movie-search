import router from "~/routes";

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      result: [],
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
      const res = await _fetchMovieByTitle({
        methods: "GET",
        title,
      });
      const movies = res?.Search ?? [];
      commit("assignState", {
        movies,
      });
    },
    async showResult({ commit }, id) {
      const res = await _fetchMovieById({
        methods: "GET",
        id,
      });
      commit("assignState", {
        result: res,
      });
      router.push({
        path: "/Result",
        query: {
          id,
        },
      });
    },
  },
};

const BASE_URL = "https://www.omdbapi.com";
const API_KEY = "7035c60c";

async function _fetchMovieByTitle(options) {
  try {
    const { methods, title } = options;
    const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${title}`, {
      methods,
    });
    return res.json();
  } catch (error) {
    alert(error.message);
  }
}

async function _fetchMovieById(options) {
  try {
    const { methods, id } = options;
    const res = await fetch(
      `${BASE_URL}/?apikey=${API_KEY}&i=${id}&plot=full`,
      {
        methods,
      }
    );
    return res.json();
  } catch (error) {
    alert(error.message);
  }
}
