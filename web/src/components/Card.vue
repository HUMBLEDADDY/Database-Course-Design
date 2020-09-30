<template>
  <div class="card bg-white mt-3 p-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont fs-xxl" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2" style="font-weight: bold">{{ title }}</div>
    </div>
    <div>shfbefbjsef</div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
};
</script>

<style lang="scss">
.card {
  .card-header {
    border-bottom: 1px solid #d4d4d4;
  }
  border-bottom: 1px solid #d4d4d4;
}
</style>