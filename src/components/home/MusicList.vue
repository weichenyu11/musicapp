<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swpie"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
          <img :src="item.picUrl" alt="" />
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gl-play-copy"></use>
            </svg>
            {{ changeCount(item.playCount) }}
          </span>
          <span class="name">
            {{ item.name }}
          </span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home";
import { reactive, onMounted } from "vue";
export default {
  // data() {
  //   return {
  //     musicList: [],
  //   };
  // },
  // methods: {
  //   async getGeDan() {
  //     let res = await getMusicList();
  //     console.log(res.data.result);
  //     this.musicList=res.data.result;
  //    // console.log(this.musicList)
  //   },
  //   changeCount:function(num){
  //     if(num>=100000000){
  //       return(num/1000000000).toFixed(1)+"亿"
  //     }else if(num>=10000){
  //       return(num/10000).toFixed(1)+"万"
  //     }
  //   }
  // },
  // mounted() {
  //   this.getGeDan();
  // },
  //vue3
  setup() {
    const state = reactive({
      musicList: [],
    });
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res, 74);
      state.musicList = res.data.result;
    });
    return { state,changeCount };
  },
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 300px;
  padding: 10px;
  .musicTop {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 20px;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 30px;
      padding: 0 10px;
      height: 30px;
      border-radius: 40px;
    }
  }
  .musicContent {
    width: 100%;
    height: 200px;
    .my-swpie {
      height: 100%;
      .van-swipe-item {
        padding-right: 6px;
        position: relative;
        // height:3.8rem ;
        img {
          width: 100%;
          height: 65%;
          border-radius: 10px;
        }
        .playCount {
          position: absolute;
          right: 6px;
          top:2px;
          color: white;
          margin-top: 0.8px;
          z-index: 100;
          .icon {
          
            width: 15px;
            height: 15px;
          }
        }
        .name {
          bottom: 0px;
        }
      }
    }
  }
}
</style>
