import { createRouter, createWebHistory } from "vue-router";
import Result from "./Result";
import NotFound from "./NotFound";
import NoResult from "./NoResult";
import Search from "../components/Search";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Search,
    },
    {
      path: "/Result",
      component: Result,
    },
    {
      path: "/NoResult",
      component: NoResult,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
