<template>
    <!-- page_details 歌曲详情页 -->
    <div class="page_songdetail" id="pageSongDetail">
		<!-- 模糊背景 -->
		<div class="g_blurbg" id="bgBlur" style="background-image:url('../assets/images/al8.png');"></div>
		<div class="maincontainer clearfix">
			<div class="compressbtn" id="btnCompressPlayBox" title="收起音乐详情页">
				<i class="fa fa-compress" aria-hidden="true"></i>
			</div>
			<div class="discsection">
				<div class="disc_needle" id="discNeedle"><img src="../assets/images/needle.png" alt=""></div>
				<div class="disc_arc" id="bgDisc" style="background-image:url('../assets/images/al8.png');">
					<div class="poster"><img src="../assets/images/disc-o.png" alt=""></div>
				</div>
				<div class="disc_btns">
					<span class="btn playall"><i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;&nbsp;喜欢</span>
					<span class="btn playall"><i class="fa fa-folder" aria-hidden="true"></i>&nbsp;&nbsp;收藏</span>
					<span class="btn playall"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;下载</span>
					<span class="btn playall"><i class="fa fa-share-square-o" aria-hidden="true"></i>&nbsp;&nbsp;分享</span>
				</div>
			</div>
			<div class="lyricsection">
				<div class="lrcinfo" id="songDetail">
					<p class="info_song"><span class="songname">--SONGNAME--</span><span class="label mv">MV</span><span class="label quality">320k</span></p>
					<p class="info_album">
						<span class="album">专辑：<span class="albumname">--ALBUMNAME--</span>
						</span>
						<span class="singer">歌手：<span class="singersname">--ALBUMNAME--</span>
						</span>
						<span class="origin">来源：<span class="originname">--ORIGIN--</span>
						</span>
					</p>
				</div>
				<div class="lrccontainer" id="lrcContainer">
					<div class="lrcbox" id="lrcBox">
						<!-- <p>暂无歌词</p> -->
					</div>
				</div>
			</div>
		</div>

        <!-- 评论 -->
        <div class="maincontainer detail-comm clearfix">
            <v-comments></v-comments>
        </div>

	</div>
</template>

<script>
import Comments from '@/components/comments'
export default {
    components: {
        'v-comments': Comments
    }
}
</script>

<style lang="css">
</style>
