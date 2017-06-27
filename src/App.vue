<template>
  <div id="app">
    <!-- page_menu 页面顶部菜单 -->
    <v-header></v-header>

    <!-- page_list 页面左侧歌单 -->
    <v-sidebar></v-sidebar>

    <!-- page_playerbar 页面底部播放控制条 -->
    <v-playerbar></v-playerbar>

    <!-- page_main 主页面内容 -->
    <router-view></router-view>

    <!-- page_search 搜索页 -->
    <v-search></v-search>

    <!-- page_details 歌曲详情页 -->
    <v-details></v-details>

    <!-- audio -->
    <audio id="audio" :src="audio">您的该版本浏览器不支持AUDIO标签！！！</audio>

    <!-- backscreen -->
    <div class="g_backscreen" id="backScreen"></div>

    <!-- tips box -->
    <!-- <div class="g_tipsbox" id="tipsBox">
      <p class="tip tip_error show"><i class="fa fa-times-circle" aria-hidden="true"></i>&nbsp;&nbsp;<span class="tiptext">ERROR STRING</span></p>
      <p class="tip tip_info"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;<span class="tiptext">INFO STRING</span></p>
      <p class="tip tip_ok"><i class="fa fa-check-circle" aria-hidden="true"></i>&nbsp;&nbsp;<span class="tiptext">OK STRING</span></p>
    </div> -->

    <!-- loading -->
    <v-loading></v-loading>

  </div>
</template>

<script>
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Playerbar from '@/components/playerbar'
import Search from '@/components/search'
import Details from '@/components/details'
import Loading from '@/components/loading'
import '@/assets/less/style.less'

export default {
    name: 'app',
    components: {
		'v-header': Header,
        'v-sidebar': Sidebar,
        'v-playerbar': Playerbar,
        'v-search': Search,
        'v-details': Details,
        'v-loading': Loading
	},
    computed: {
        audio () {
            return this.$store.state.audio;
        }
    },
    mounted: function () {
        // 顶部菜单input回车搜索
		$("#inpSearch").on("keydown", function(ev) {
			var ev = ev || window.event;
			if (ev.keyCode === 13) {
				funcSearch();
			}
		});
		// 顶部菜单query图标点击搜索
		$("#top_searchBtn").on("click", function() {
			funcSearch();
		});

		// ===============歌单功能========================

		// 切换歌单与搜索页
		$("#list_create_like, .backward").on("click", function() {
			// 显示列表页 隐藏搜索页
			$("#pageSearch").slideUp(500);
			$("#pageMain").slideDown(500);
		});

		// ===============歌曲详情页========================

		// 展开与缩放歌曲详情页
		$("#btnExpandPlayBox").on("click", function() {
			// style: 展开歌曲详情页
			$("#pageSongDetail").css({
				"top": "60px",
				"right": 0,
				"opacity": 1
			});
		});
		$("#btnCompressPlayBox, .backward").on("click", function() {
			// style: 缩放歌曲详情页
			$("#pageSongDetail").css({
				"top": "100%",
				"right": "100%",
				"opacity": 0
			});
		});
		// 搜索歌曲功能函数
		var funcSearch = function() {
			var strSearch = $("#inpSearch").val().trim();
			// 显示搜索页 隐藏列表页
			$("#pageMain").slideUp(300);
			$("#pageSearch").slideDown(300);
			// 缩放歌曲详情页
			$("#pageSongDetail").css({
				"top": "100%",
				"right": "100%",
				"opacity": 0
			});
		};
	}
}
</script>

<style>

</style>
