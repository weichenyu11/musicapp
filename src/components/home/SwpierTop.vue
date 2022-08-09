<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
//import axios from 'axios';
import{getBanner} from '@/request/api/home.js'
import {reactive,onMounted} from 'vue';
export default {
  setup() {
    const state = reactive({
        images:[
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]});
    onMounted(async ()=> {
        // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
        //     console.log(res);
        //     state.images=res.data.banners
        //     console.log(state.images)
        // })
        let res= await getBanner();
        state.images=res.data.banners
        console.log(res)
    })
    return { state };
  },
};
import axios from 'axios'
</script>
<style lang="less">
.van-swipe{
    width: 100%;
    margin:0,5px;
    padding: 0, 5px;
    height: 150px;
    .van-swipe__track{
        .van-swipe-item{
            img{
                width: 100%;
                height: 100%;
                margin-right: 5px;
                border-radius:25px;
            }
        }
        .van-swipe__indicators--active{
            background-color:red;
        }
    }
}
</style>