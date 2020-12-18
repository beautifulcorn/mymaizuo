import Vue from "vue";
import VueRouter from "vue-router";
import films from "@/router/films.js";
import center from "@/router/center.js";
import cinemas from "@/router/cinemas";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originPush.call(this, location).catch((err) => err);
};

const routes = [center, cinemas, films, { path: "/", redirect: "/films" }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
