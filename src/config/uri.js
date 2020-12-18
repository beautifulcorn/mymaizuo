let prefix = "/api/";
export default {
  // 获取城市信息
  getCity: prefix + "getCitiesInfo",
  //获取正在热映列表
  getNowPlaying: prefix + "getNowPlayingFilmList",
  //获取将要上映列表
  getComingSoon: prefix + "getComingSoonFilmList",
};
