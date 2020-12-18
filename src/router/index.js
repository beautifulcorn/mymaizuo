import Vue from "vue";
import VueRouter from "vue-router";
import films from "@/router/films.js";
import center from "@/router/center.js";
import cinemas from "@/router/cinemas";

Vue.use(VueRouter);

const routes = [center, cinemas, films, { path: "/", redirect: "/films" }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
