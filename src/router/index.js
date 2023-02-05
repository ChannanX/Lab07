import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/course",
      name: "course",
      component: () => import("../views/course.vue"),
    },
    {
      path: "/add-drop",
      name: "add-drop",
      component: () => import("../views/AddDrop.vue"),
    },
  ],
});

export default router;
