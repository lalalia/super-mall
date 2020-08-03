<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px; /*没有内容的话，line-height是撑不起来高度的，需要下面的height*/
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }

  .left, .right{
    width: 60px;
    /*background-color: red; 测试效果*/

  }

  .center{
    flex: 1;
    /*background-color: blue; 测试效果*/
  }

</style>
