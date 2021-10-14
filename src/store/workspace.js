import router from "~/routes/index";
export default {
  namespaced: true,
  state() {
    return {};
  },
  actions: {
    async getMovies(context, payload) {
      const movies = await _request({
        methods: "GET",
      });
      console.log(movies);
    },
  },
};

async function _request(options) {
  try {
    return await fetch("https://www.omdbapi.com", {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    alert(error.message);
  }
}
