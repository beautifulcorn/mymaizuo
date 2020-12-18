import films from "@/views/films/films";
import nowPlaying from "@/views/films/nowPlaying";
import comingSoon from "@/views/films/comingSoon";

export default {
  path: "/films",
  component: films,
  redirect: "/films/nowPlaying",
  children: [
    { path: "nowPlaying", component: nowPlaying },
    { path: "comingSoon", component: comingSoon },
  ],
};
