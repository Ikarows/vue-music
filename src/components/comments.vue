<template>
    <div class="tabitem commentlist">
        <div class="commentbox clearfix">
            <textarea name="" id="" cols="30" rows="10" maxlength="140"></textarea>
            <span class="wordslen">140</span>
            <a href="javascript:void(0);" class="btn emoji"><i class="fa fa-smile-o" aria-hidden="true"></i></a>
            <a href="javascript:void(0);" class="btn at"><i class="fa fa-at" aria-hidden="true"></i></a>
            <a href="javascript:void(0);" class="btn comment">评论</a>
        </div>
        <div class="commenttable">
            <div class="comment new">
                <div class="title">热门评论</div>
                <div class="content" v-if="getHotComments != ''" v-for="comment in getHotComments">
                    <p><span class="username"><a href="javascript:void(0);">{{comment.user.nickname}}</a></span>：<span class="usersay">{{comment.content}}</span></p>
                    <div class="btngroups clearfix">
                        <span class="time">{{new Date(comment.time).toLocaleString()}}</span>
                        <span class="btn">
                            <a href="javascript:void(0);" class="btn_report">举报</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0);" class="btn_support"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>({{comment.likedCount}})</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0);" class="btn_share">分享</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0);" class="btn_reply">回复</a>
                        </span>
                    </div>
                    <div class="userface"><a href="javascript:void(0);"><img :src="comment.user.avatarUrl" alt="" /></a></div>
                </div>
                <div class="content" v-else>
                    <p style="color:#ccc; text-align: center;">-- 暂无评论 --</p>
                </div>
            </div>
            <div class="comment prefect">
                <div class="title">所有评论</div>
                <div class="content" v-if="getComments != ''" v-for="comment in getComments">
                    <p><span class="username"><a href="javascript:void(0);">{{comment.user.nickname}}</a></span>：<span class="usersay">{{comment.content}}</span></p>
                    <div class="btngroups clearfix">
                        <span class="time">{{new Date(comment.time).toLocaleString()}}</span>
                        <span class="btn">
                            <a href="javascript:void(0);" class="btn_report">举报</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0);" class="btn_support"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>({{comment.likedCount}})</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0);" class="btn_share">分享</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0);" class="btn_reply">回复</a>
                        </span>
                    </div>
                    <div class="userface"><a href="javascript:void(0);"><img :src="comment.user.avatarUrl" alt="" /></a></div>
                </div>
                <div class="content">
                    <p style="color:#ccc; text-align: center;">-- 暂无评论 --</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        //获取评论
        getComments () {
            return this.$store.state.comments
        },
        //获取热门评论
        getHotComments () {
            return this.$store.state.hotComments
        }
    }
}
</script>

<style lang="css">
</style>
