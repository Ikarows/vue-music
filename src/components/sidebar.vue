<template>
    <!-- page_list 页面左侧歌单 -->
    <div class="page_list">
		<div class="list_container" id="listContainer">
			<div class="list list_recommend">
				<p class="title">推荐</p>
				<div class="btngroups">
					<p class="btn find"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;&nbsp;发现音乐</p>
					<p class="btn fm"><i class="fa fa-bullseye" aria-hidden="true"></i>&nbsp;&nbsp;私人FM</p>
					<p class="btn mv"><i class="fa fa-youtube-play" aria-hidden="true"></i>&nbsp;&nbsp;MV</p>
					<p class="btn friends"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;我的朋友</p>
				</div>
			</div>
			<div class="list list_me">
				<p class="title">我的音乐</p>
				<div class="btngroups">
					<p class="btn local"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;&nbsp;本地音乐</p>
					<p class="btn download"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;下载管理</p>
					<p class="btn cloud"><i class="fa fa-cloud" aria-hidden="true"></i>&nbsp;&nbsp;我的音乐云盘</p>
					<p class="btn singers"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;我的歌手</p>
					<p class="btn me_mv"><i class="fa fa-youtube-play" aria-hidden="true"></i>&nbsp;&nbsp;我的MV</p>
					<p class="btn me_fm"><i class="fa fa-bullseye" aria-hidden="true"></i>&nbsp;&nbsp;我的电台</p>
				</div>
			</div>
			<div class="list list_create">
				<p class="title">创建的歌单
					<span class="title_btngroups">
						<a href="javascript:void(0);" class="btn addlist" id="addList"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
						<a href="javascript:void(0);" class="btn unfoldlist"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
					</span>
				</p>
				<div class="btngroups">
					<p
                        class="btn list_create_like"
                        :class="[this.$route.path == '/' ? 'active' : '']"
                        id="list_create_like"
                    >
                        <router-link :to="{ path: '/' }" class="sidebar-link"><i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;&nbsp;我喜欢的音乐</router-link>
                    </p>

					<p
                        class="btn list_create_001"
                        :class="[this.$route.path == '/playlist2' ? 'active' : '']"
                    >
                        <router-link :to="{ path: '/playlist2' }" class="sidebar-link"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;&nbsp;钢琴总是好听的</router-link>
                    </p>
				</div>
			</div>
			<div class="list list_collect">
				<p class="title">收藏的歌单
					<span class="title_btngroups">
						<a href="javascript:void(0);" class="btn unfoldlist"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
					</span>
				</p>
				<div class="btngroups">
					<p class="btn list_collect_id001"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;&nbsp;当年烂大街的舞曲</p>
				</div>
			</div>
		</div>
		<!-- 全屏小窗 -->
		<div class="playlist_smallwindow clearfix">
			<div class="poster" id="btnExpandPlayBox">
				<img src="../assets/images/temp_pic001.jpg" alt="" id="smallwindow_albumPic" />
				<div class="poster_hoverback"><i class="fa fa-expand" aria-hidden="true"></i></div>
			</div>
			<div class="info">
				<p class="songname" id="smallwindow_songName">-SONGNAME-</p>
				<p class="singername" id="smallwindow_singerName">-SINGER-</p>
			</div>
			<div class="btngroups">
				<div class="btn collect"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
				<div class="btn share"><i class="fa fa-share-square-o" aria-hidden="true"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
</style>
