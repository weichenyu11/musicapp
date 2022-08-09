<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" class="bgimg" alt="" />
    <div class="itemLeft">
      <van-icon class="icon" name="arrow-left" @click="$router.go(-1)" />
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <van-icon class="icon" name="search" />
      <van-icon class="icon" name="manager-o" />
    </div>
  </div>
  <div class="itemTopContent">
    <div class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="" />
      <div class="palyCount">
        <!-- <span>{{changeCount(playlist.playCount)}}</span> -->
      </div>
    </div>
    <div class="contentRight">
      <p class="rightP_one">{{ playlist.name }}</p>
      <div class="right-img">
        <!-- <img :src="playlist.creator.backgroundUrl" alt="" /> -->
        <span>{{ playlist.creator.nickname }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
      <p class="rightP_two">
        <span>{{ playlist.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </p>
    </div>
  </div>
  <div class="itemTopFooter">
    <span class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <span>{{ playlist.commentCount }}</span>
    </span>
    <span class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ playlist.shareCount }}</span>
    </span>
    <span class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <span>下载</span>
    </span>
    <span class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </span>
  </div>
</template>
<script>
export default {
  setup(props) {
   // console.log(props);
    //通过props进行传值，如果数据拿不到，就获取sessionStorage的数据
    if(props.playlist.creator=""){
        props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist.creator)
    }
  },
  props: ["playlist"],
};
</script>
<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //flex-direction: column;
  //margin-right:5px;
  position: relative;
  margin-top: 15px;
  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 30px;
    justify-content: space-between;
    span {
      font-size: 20px;
      color: white;
    }
    .icon {
      color: white;
    }
  }
  .bgimg {
    width: 100%;
    height: 500px;
    position: absolute;
    z-index: -1;
    filter: blur(30px);
  }
}
.itemTopContent {
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .contentLeft {
    width: 36%;
    height: 130px;
    position: relative;

    img {
      width: 130px;
      height: 130px;
      border-radius: 10px;
      position: absolute;
      z-index: -1;
    }
    .palyCount {
      position: absolute;
      right: 5px;
      margin-top: 5px;
      .icon {
        width: 13px;
        height: 13px;
        margin-top: -0.02rem;
        vertical-align: middle;
      }
      span {
        font-size: 13px;
        color: #fff;
      }
    }
  }
  .contentRight {
    width: 60%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rightP_one {
      font-size: 15px;
      font-weight: 900;
      color: #fff;
      font-family: "微软雅黑";
    }
    .right_img {
      width: 100%;
      height: 30px;
      line-height: 30px;
      color: #ccc;
      img {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 5px;
      }
      .icon {
        width: 13px;
        height: 13px;
        margin-top: -0.08rem;
        vertical-align: middle;
      }
    }
    .rightP_two {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        color: #ccc;
      }
      .icon {
        width: 12px;
        height: 12px;
      }
    }
  }
}
.itemTopFooter {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  writing-mode: vertical;
  .footerItem {
    display: flex;
    width: 25%;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .icon {
      fill: #fff;
    }
    span {
      margin-top: 0.1rem;
    }
  }
}
</style>
