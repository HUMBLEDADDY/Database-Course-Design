
<template>
  <div class="home">
    <M-listcard
      title="新闻资讯"
      routes
      icon="cc-menu-circle"
      :categories="newsCats"
    >
      <template #items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{ news.category }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey fs-sm" style="float: right">{{
            news.updatedAt | date
          }}</span>
        </router-link>
      </template>
    </M-listcard>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  name: "Home",
  data() {
    return {
      newsCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
  },
  created() {
    this.fetchNewsCats();
  },
};
</script>
