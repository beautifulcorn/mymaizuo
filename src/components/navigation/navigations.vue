<template>
  <van-tabbar v-model="active" @change="onChange">
    <!--  -->
    <van-tabbar-item>
      <span>电影</span>
      <van-icon class="icon iconfont icon-dianying" slot="icon" />
    </van-tabbar-item>
    <van-tabbar-item>
      <span>影院</span>
      <van-icon class="icon iconfont icon-yingyuan" slot="icon" />
    </van-tabbar-item>
    <van-tabbar-item>
      <span>我的</span>
      <van-icon class="icon iconfont icon-yixianshi_huaban" slot="icon" />
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
import "@/assets/fonts/iconfont.css";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
  data() {
    return {
      active: 0,
      urls: ["/films", "/cinemas", "/center"],
    };
  },
  created() {
    this.active =
      this.urls.indexOf(this.$route.path) === -1
        ? 0
        : this.urls.indexOf(this.$route.path);
  },
  methods: {
    onChange(index) {
      this.$router.push(this.urls[index]);
    },
  },
};
</script>
