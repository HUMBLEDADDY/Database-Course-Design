<template>
  <div class="page-aticle" v-if="modle">
  <div  class="d-flex py-3 px-2 ai-center border-bottom " style="width:100%">
    <router-link class="d-flex flex-1 ai-center" style="width:80%;padding-left:-20px" tag="div" to="/">
      <span class="iconfont icon-fanhui text-primary title"></span>
      <span class="flex-1 text-primary title text-ellipsis" style="font-weight:bold;">{{modle.title}}</span>
    </router-link>
    <div class="text-grey" >{{modle.updatedAt | date}}</div>
  </div>
  <div v-html="modle.content" class="px-3 body"></div>
  </div>
</template>


<script>
import dayjs from 'dayjs'
export default {
    filters:{
      date(val){
        return dayjs(val).format('YYYY-MM-DD')
      }
    },
  props:{
    id:{required:true}
  },
  data() {
    return {
      modle:null
    }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.modle = res.data
    }
  },
  created() {
    this.fetch();
  },
}
</script>

<style lang="scss" scoped>
  .title{
    font-size: 1.5rem;
  }
</style>

