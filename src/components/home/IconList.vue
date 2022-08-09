<template>
  <div class="iconList">
    <div class="iconItem">
      <van-icon class="icon" name="flower-o" />
      <span>
          每日推荐
      </span>
    </div>
    <div class="iconItem">
      <van-icon class="icon" name="music-o" />
      <span>
          私人FM
      </span>
    </div>
    <div class="iconItem">
      <van-icon class="icon" name="service-o" />
      <span>
          歌单
      </span>
    </div>
    <div class="iconItem">
      <van-icon class="icon" name="star-o" />
      <span>
          排行榜
      </span>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .iconList{
    widows: 100%;
    height: 65px;
    margin-top:15px ;
    display: flex;
    justify-content: space-around;
    align-items:center;
    .iconItem{
      margin-top: 10px;
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
       // margin-top: 2px;
        font-size:30px;
      }
    }
  }
</style>