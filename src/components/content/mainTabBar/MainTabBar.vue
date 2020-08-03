<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <!--单纯WebStorm有毛病，这里可以显示-->
      <img slot="item-icon" src="~assets/images/tab-bar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tab-bar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <img slot="item-icon" src="~assets/images/tab-bar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tab-bar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <img slot="item-icon" src="~assets/images/tab-bar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tab-bar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="item-icon" src="~assets/images/tab-bar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tab-bar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>

</template>

<script>
import TabBar from "components/common/tab-bar/TabBar";
import TabBarItem from "components/common/tab-bar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
