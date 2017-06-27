<template>
    <!-- page_main 歌单栏目导航 -->
    <div class="page_main R_page" id="pageMain">
        <div class="main_container">
            <div class="listcontainer">
                <div class="listinfo clearfix">
                    <div class="info_listpic">
                        <img src="../assets/images/temp_pic001.jpg" alt="" id="playlist_listPic" />
                    </div>
                    <div class="info_detailtext">
                        <div class="playinfo">
                            <span><i class="fa fa-music" aria-hidden="true"></i>&nbsp;&nbsp;<span id="playlist_trackCount">0</span></span>
                            <span><i class="fa fa-play-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;<span id="playlist_playCount">0</span></span>
                        </div>
                        <div class="detail_name">
                            <span class="listtag">歌单</span>
                            <span class="listname" id="playlist_listName">喧扰繁华｀敲断时夏</span>
                        </div>
                        <div class="detail_time">
                            <span class="userpic"><a href="javascript:void(0);"><img src="../assets/images/user_face.png" alt="" id="playlist_userFace" /></a></span>
                            <span class="username"><a href="javascript:void(0);" id="playlist_userName">user008</a></span>
                            <span class="createtime" id="playlist_createTime">1970-01-01</span>
                            <span>创建</span>
                        </div>
                        <div class="detail_btns">
                            <span class="btn playall pull-left"><i class="fa fa-play-circle-o" aria-hidden="true" style="color:#c52f30;"></i>&nbsp;&nbsp;播放全部</span>
                            <span class="btn plus"><i class="fa fa-plus" aria-hidden="true"></i></span>
                            <span class="btn playall"><i class="fa fa-folder" aria-hidden="true"></i>&nbsp;&nbsp;收藏(0)</span>
                            <span class="btn playall"><i class="fa fa-share-square-o" aria-hidden="true"></i>&nbsp;&nbsp;分享(0)</span>
                            <span class="btn playall"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;下载全部</span>
                        </div>
                    </div>
                </div>
                <!-- 歌曲列表 -->
                <music-list></music-list>
            </div>
        </div>
    </div>
</template>

<script>
import MusicList from '@/components/musicList'
export default {
    components: {
        'music-list': MusicList
    },
    mounted () {
        // 获取歌单列表
        this.$store.dispatch('getPlayList', '162240924') // id: 162240924
    }
}
</script>

<style lang="css">
</style>
