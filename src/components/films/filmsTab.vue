<template>
  <van-tabs @click="onClick" v-model="active">
    <van-tab title="正在热映"><nowPlaying></nowPlaying></van-tab>
    <van-tab title="即将上映"><comingSoon></comingSoon></van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import nowPlaying from "@/views/films/nowPlaying";
import comingSoon from "@/views/films/comingSoon";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      urls: ["/films/nowPlaying", "/films/comingSoon"],
    };
  },
  created() {
     this.active =
      this.urls.indexOf(this.$route.path) === -1
        ? 0
        : this.urls.indexOf(this.$route.path);
  },
  methods: {
    onClick(name) {
      this.$router.push(this.urls[name]);
    },
  },
  components: {
    nowPlaying,
    comingSoon,
  },
};
</script>
