<template>
  <div>
    <div class="topbar bg-primarydark py-2 px-2 d-flex ai-center">
      <img src="../assets/logo.png" class="logo" style="width:auto" height="30" />
      <div class="px-2">
        <div class="text-white fs-xl mt-2" style="font-weight:bold">玩咖</div>
        <div></div>
      </div>
    </div>
    <div class="main bg-primary pb-2 pt-3">
      <div class="nav jc-around nav-inverse pb-1">
        <div class="nav-item" :class="{active: active === 0}" @click="active = 0">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item" :class="{active: active === 1}" @click="active = 1">
          <router-link class="nav-link" tag="div" to="/game">游戏</router-link>
        </div>
        <div class="nav-item" :class="{active: active === 2}" @click="active = 2">
          <router-link class="nav-link" tag="div" to="/hardware">硬件</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
.topbar {
  position: fixed;
  width: 100%;
  z-index: 999999;
}
.main {
  padding-top: 55px;
}
.logo {
  border-radius: 50%;
}
</style>