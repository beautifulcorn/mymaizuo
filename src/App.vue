<template>
  <div id="app">
    <router-view />
    <!-- 底部组件 -->
    <navigations></navigations>
  </div>
</template>
<script>
// import uri from '@/config/uri';
import navigations from "@/components/navigation/navigations";
export default {
  // async created(){
  //     let data = await this.$http.get(uri.getCity);
  //     console.log(data);
  //  }
  components:{
    navigations
  }
};
</script>
<style lang="scss"></style>
