
<template>
  <div class="home">
    <M-listcard title="硬件分类" routes="hardware" icon="cc-menu-circle" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/hardwares/${news._id}`" class="hardware py-2  d-flex" v-for="(news,i) in category.newsList"::key="i">
            <img :src="news.icon" class="hardwareimg " style="width:6rem; height:6rem">
            <span class="text-primarydark fs-mi hardwarename   text-ellipsis pr-2">{{news.name}}</span>
        </router-link>
      </template>
    </M-listcard>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    filters:{
      date(val){
        return dayjs(val).format('MM/DD')
      }
    },
  name: 'Home',
  data() {
    return {
      newsCats:[
      ]
    }
  },
  methods: {
    async fetchNewsCats(){
      const res = await this.$http.get('hardwares/list')
      this.newsCats = res.data
    }
  },
  created() {
    this.fetchNewsCats();
  },
}
</script>

<style lang="scss" scoped>
    .hardware{
    background-color: white;
    border-bottom: 1px solid rgb(212, 212, 212);
    .hardwareimg{
        position: relative;
        left: 1rem;
    }
    .hardwarename{
        position: absolute;
        left: 9rem;
        line-height: 6rem;
        font-weight: bold;
    }
}
</style>