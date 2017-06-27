<template>
    <div class="listtab">
        <div class="tabbtns clearfix">
            <label class="label_btn active" for="music">歌单列表</label>
            <label class="label_btn" for="comment">评论(0)</label>
            <label class="label_btn" for="follower">收藏者</label>
            <span class="menu_search">
                <input type="text" placeholder="搜索歌单音乐" class="search_inp" />
                <span class="search_btn"><i class="fa fa-search" aria-hidden="true"></i></span>
            </span>
        </div>
        <!-- musiclist -->
        <input type="radio" id="music" name="tablist" checked="" />
        <div class="tabitem musiclist">
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;&nbsp;</th>
                        <th>操作</th>
                        <th>音乐标题</th>
                        <th>歌手</th>
                        <th>专辑</th>
                        <th>时长</th>
                    </tr>
                </thead>
                <tbody class="infolist" id="infoList_playlist">
                    <tr
                        v-for="(playdata, index) in playlist"
                        :data-index="index" data-id="33713829"
                        :data-song-name="playdata.name"
                        data-duration="undefined"
                        data-audio=""
                        :data-music-id="playdata.id"
                        :data-album-name="playdata.al.name"
                        :data-album-pic="playdata.al.picUrl"
                        :data-singer-name="playdata.al.name"
                        @dblclick="play(index)"
                    >
                        <td class="index" data-num="01">01</td>
                        <td><i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;
                            <i class="fa fa-download" @click="download(index)" aria-hidden="true"></i></td>
                        <td>{{playdata.name}}</td>
                        <td><span v-for="gs in playdata.ar"> {{gs.name}} </span></td>
                        <td>{{playdata.al.name}}</td>
                        <td>--:--</td>
                    </tr>
                </tbody>
                </tfoot>
            </table>
        </div>
        <!-- comments -->
        <input type="radio" id="comment" name="tablist" />
        <v-comments></v-comments>
        <!-- followers -->
        <input type="radio" id="follower" name="tablist" />
        <div class="tabitem followerlist">
            <figure>
                <a href="javascript:void(0);"><img src="../assets/images/user_face.png" alt="" /></a>
                <figcaption><a href="javascript:void(0);">-USERNAME-</a></figcaption>
            </figure>
            <figure>
                <a href="javascript:void(0);"><img src="../assets/images/user_face.png" alt="" /></a>
                <figcaption><a href="javascript:void(0);">-USERNAME-</a></figcaption>
            </figure>
            <figure>
                <a href="javascript:void(0);"><img src="../assets/images/user_face.png" alt="" /></a>
                <figcaption><a href="javascript:void(0);">-USERNAME-</a></figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
import Comments from '@/components/comments'
export default {
    components: {
        'v-comments': Comments
    },
    computed: {
        //获取歌曲列表数据
        playlist () {
            return this.$store.state.playList
        }
    },
    methods: {
        //播放
        play (index) {
            var _this = this
            $('#infoList_playlist tr').each(function(){
                if($(this).attr('data-index') == index){
                    // 歌曲id
                    var id = $(this).attr('data-music-id')
                    //获取音乐
                    _this.$store.dispatch('getMusic', id)
                    //获取歌单评论
                    _this.$store.dispatch('getComments', id) // id: 162240924
                    //设置音乐地址使其播放
                    $(this).attr('data-audio', _this.$store.state.audio)
                }
            });
        },
        //下载音乐
        download (index) {
            var _this = this
            $('#infoList_playlist tr').each(function(){
                if($(this).attr('data-index') == index){
                    // 歌曲id
                    var id = $(this).attr('data-music-id')
                    //获取下载地址
                    _this.$store.dispatch('downloadUrl', id)
                }
            });
        }
    }
}
</script>

<style lang="css">
</style>
