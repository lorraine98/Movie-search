import { createRouter, createWebHistory } from "vue-router";
import Workspace from "./Workspace";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
