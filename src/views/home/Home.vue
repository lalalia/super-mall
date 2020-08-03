<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature/>
    <tab-control class="tab-control" :titles="titles"></tab-control>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li><li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
    </ul>

  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeature from "./childComps/HomeFeature";

  import NavBar from "components/common/nav-bar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行','新款','精选']
      }
    },
    created() {
      //1、请求多个数据：轮播图以及其他数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 43px;
  }
</style>
