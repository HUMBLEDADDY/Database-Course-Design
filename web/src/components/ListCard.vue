<template>
  <M-card :icon="icon" :title="title">
      <div class="card-body pt-3">
        <div class="nav jc-between">
            <div class="nav-item" v-for="(category,i) in categories" :key="i" :class="{active: active === i}" @click="$refs.list.$swiper.slideTo(i)">
                <router-link class="nav-link" tag="div" :to="`/${routes}`"  >{{category.name}}</router-link>
            </div>
        </div>
      </div>
      <div class="pt-3">
        <swiper ref="list"
          @slide-change="()=> (active = $refs.list.$swiper.realIndex) ">
          <swiper-slide v-for="(category,i) in categories" :key="i">
                <slot name="items" :category="category"></slot>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </M-card>
</template>

<script>
import dayjs from 'dayjs'
export default {
    filters:{
      date(val){
        return dayjs(val).format('MM/DD')
      }
    },
    data() {
        return {
            active:0
        }
    },
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
        routes:{type:String,required:true},
        categories:{
            type:Array,
            required: true
        }
    }
}
</script>

<style>

</style>