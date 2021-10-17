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
      const res = await _requestTitle({
        methods: "GET",
        title,
      });
      const movies = res?.Search ?? [];
      commit("assignState", {
        movies,
      });
    },
    async showResult(context, id) {
      const res = await _requestId({
        methods: "GET",
        id,
      });
      console.log(res);
    },
  },
};

async function _requestTitle(options) {
  try {
    const { methods, title, id } = options;
    return await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${title}`, {
      methods,
    }).then((res) => res.json());
  } catch (error) {
    alert(error.message);
  }
}

async function _requestId(options) {
  try {
    const { methods, title, id } = options;
    return await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${title}`, {
      methods,
    }).then((res) => res.json());
  } catch (error) {
    alert(error.message);
  }
}
