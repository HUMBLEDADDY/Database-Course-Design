<template>
  <div class="page-aticle" v-if="modle">
    <div class="d-flex py-2 px-2 ai-center border-bottom" style="width:100%">
      <router-link
        class="d-flex flex-1 ai-center"
        style="width:80%;padding-left:-50px"
        tag="div"
        to="/"
      >
        <span class="iconfont py-2 icon-fanhui text-primary title" style="line-height:105%"></span>
        <span
          class="flex-1 py-2 text-primary title text-ellipsis"
          style="font-weight:bold;line-height:100%;height:101%"
        >{{modle.title}}</span>
      </router-link>
      <div class="text-grey py-2">{{modle.updatedAt | date}}</div>
    </div>
    <div v-html="modle.content" class="px-3 body"></div>
  </div>
</template>


<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    },
  },
  props: {
    id: { required: true },
  },
  data() {
    return {
      modle: null,
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.modle = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.2308rem;
}
</style>

