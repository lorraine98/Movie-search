import { createRouter, createWebHistory } from "vue-router";
import Result from "./Result";
import NotFound from "./NotFound";
import NoResult from "./NoResult";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
    {
      path: "/Result",
      component: Result,
    },
    {
      path: "/NoResult",
      component: NoResult,
    },
  ],
});
