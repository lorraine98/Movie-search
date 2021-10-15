import router from "~/routes/index";
export default {
  namespaced: true,
  state() {
    return {};
  },
  actions: {
    async getMovies(context, payload) {
      const { title } = payload;
      const movies = await _request({
        methods: "GET",
        title
      });
      return movies;
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
