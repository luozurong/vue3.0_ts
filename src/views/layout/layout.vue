<template>
  <div>
    <router-view></router-view>
    <div class="layout-footer">
      <router-link class="layout-footer-item" to="/home">首页</router-link>
      <router-link class="layout-footer-item" to="/category">分类</router-link>
      <router-link class="layout-footer-item" to="/cart">购物车</router-link>
      <router-link class="layout-footer-item" to="/mine">我的</router-link>
    </div>
  </div>
</template>
<style lang="less">
.layout-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .layout-footer-item {
    width: 25%;
    text-align: center;
    display: inline-block;
    text-decoration: none;
  }
}
</style>
