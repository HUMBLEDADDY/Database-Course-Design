<template>
  <div class="page-game" v-if="modle">
  <div  class="d-flex py-3 px-2 ai-center border-bottom " style="width:100%">
    <router-link class="d-flex flex-1 ai-center" style="width:80%;padding-left:-20px" tag="div" to="/game">
      <span class="iconfont icon-fanhui text-primarydark title"></span>
      <span class="flex-1 text-primarydark title text-ellipsis" style="font-weight:bold;">{{modle.name}}</span>
    </router-link>
  </div>
    <img :src="modle.icon" style="height:15rem">
    <div class="priceandscore d-flex mb-1">
        <span class="text-white price">￥<span class="theprice">{{modle.price}}</span></span>
        <span class="text-white score">{{modle.score}}</span>
    </div>
    <div class="bg-white">
        <div class="text-dark jj pl-3  pt-3 pb-2">游戏简介</div>
        <div class="text-dark content  px-3 pb-3">{{modle.content}}</div>
        <div class="text-dark publisher  px-3 pb-3">开发商: <span class="text-blue">{{modle.publisher}}</span></div>
    </div>

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
        const res = await this.$http.get(`games/${this.id}`)
        this.modle = res.data
        switch(this.modle.score){
            case "1":
                this.modle.score = "差评如潮"
                break;
            case "2":
                this.modle.score = "特别差评"
                break;
            case "3":
                this.modle.score = "多半差评"
                break;
            case "4":
                this.modle.score = "褒贬不一"
                break;
            case "5":
                this.modle.score = "多半好评"
                break;
            case "6":
                this.modle.score = "特别好评"
                break;
            case "7":
                this.modle.score = "好评如潮"
                break;                        
        }
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
    .priceandscore{
        height: 3rem;
        width: 100%;
        background-color: #303539;
        position: relative;
        top: -5px;
        .price{
            font-size: 1.5rem;
            line-height: 3rem;
            position: relative;
            left: 0.5rem;
            .theprice{
                font-size: 2rem;
                font-weight: bolder;
            }
        }
        .score{
            font-size: 1rem;
            line-height: 3rem;
            font-weight: bolder;
            position: absolute;
            right: 5%;
        }
    }
    .jj{
        font-size: 1rem;
        font-weight: bold;
        display: block;
    }
    .content{
        font-size: 0.8rem;
        display: block;
        font-weight: 650;
        letter-spacing:2px;
        font-family: YouYuan;
    }
    .publisher{
        font-size: 0.85rem;
        display: block;
        font-weight: 850;
        font-family: YouYuan;
    }
</style>

