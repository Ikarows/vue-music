import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import api from '@/api'
Vue.use(Vuex);

const store = new Vuex.Store({
    //0.存储变量数据
    state:{
        audio: '', //音乐地址
        playList: [], //歌单列表
        loading: 'show', //加载
        comments: '', //当前播放歌曲评论
        hotComments: '' //热门评论
    },
    //2.改变变量数据
    mutations:{
        setPlayList (state, data) {
            state.playList = data;
        },
        setMusic (state, data) {
            state.audio = data;
        },
        setLoading (state, data) {
            state.loading = data;
        },
        setComments (state, data) {
            state.comments = data.comments;
            state.hotComments = data.hotComments;
        }
    },
    //1.获取数据传给 mutations改变变量数据（己经把原先组件上的获取数据放到了这里来处理）
    actions:{
        //获取歌单
        getPlayList (store, id) {
            axios.get(api.getPlayList(id)).then(function(data){

                store.commit("setPlayList", data.data.playlist.tracks)
                store.commit("setLoading", 'hide')
                // if(data.data.playlist > 0){
                //     store.commit("setdata", data.data.playlist)
                // }else{
                //     store.commit("setdata", [{name: "暂无数据"}])
                // }
            }).catch((err) => {
                //store.commit("setPlayList", [{name: "获取数据出错"}])
                layer.msg('获取数据出错')
                console.log(err)
            })
        },
        //获取单个歌曲
        getMusic (store, id) {
            axios.get(api.getMusic(id)).then(function(data){
                store.commit("setMusic", data.data.data[0].url)
            }).catch((err) => {
                layer.msg('获取数据出错')
                console.log(err)
            })
        },
        //获取mp3下载地址
        downloadUrl (store, id) {
            axios.get(api.getMusic(id)).then(function(data){
                window.open( data.data.data[0].url )
            }).catch((err) => {
                layer.msg('获取数据出错')
                console.log(err)
            })
        },
        //获取评论
        getComments (store, id) {
            axios.get(api.getComments(id)).then(function(data){
                store.commit("setComments", data.data)
            }).catch((err) => {
                layer.msg('获取数据出错')
                console.log(err)
            })
        }
    },
    modules:{}
});

export default store;
