import { getMusicLyric } from '@/request/api/item.js';
import { createStore } from 'vuex';
import {getPhoneLogin} from '@/request/api/home.js';
export default createStore({
  state: {
    playList:[{// 播放列表的默认值
      al:{
        id: 17594,
        name: "不良少年",
        pic: 109951164006892980,
        picUrl: "https://p2.music.126.net/Ea88ud2UYyWtjHQqqt0gRA==/109951164006892980.jpg",
        pic_str: "109951164006892980",
      },
      id: 174956,
      ar:[{
        name:"魏晨宇",
      }]
    }],
    playListIndex:0,//默认下标是0,
    isbtnShow: true, //暂停按钮的显示
    detailShow:false,// 歌曲详情页的显示
    lyricList:{},// 歌词
    currentTime: 0, //当前时间
    duration: 0, //歌曲总时长
    isFooterMusic:true ,//是否显示底部组件
    isLogin:false, //判断用户是否登陆 ，初始状态没有登陆
    token:"",
    user:{},//用户信息
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList);

    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime: function (state, value) {
      // console.log(state.currentTime);
      state.currentTime = value;
    },
    updateDuration: function (state, value) {
      state.duration = value;
    },
    pushPlayList: function (state, value) {
      state.playList.push(value);
    },
    updateIsLogin: function (state, value) {
      state.isLogin = true;
    },
    updateToken:function(state,value){
      state.token=value;
      localStorage.setItem("token", state.token);
    },
    updateUser:function(state,value){
      state.user=value;
    },
  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value)
      console.log(res);
      context.commit("updateLyricList",res.data.lrc)
    },
    getLogin:async function(context,value){
      let res =await getPhoneLogin(value);
      // console.log(res);
      return res;
    }
  },
  modules: {
  }
})
