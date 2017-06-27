<template>
    <!-- page_playerbar 页面底部播放控制条 -->
    <div class="page_playerbar clearfix">
        <!-- 播放控制按钮组 -->
        <div class="playerbar_playbtngroup" id="playBtnGroup">
            <div class="btn prev"><i class="fa fa-step-backward" aria-hidden="true"></i></div>
            <div class="btn play"><i class="fa fa-play" aria-hidden="true"></i></div>
            <div class="btn next"><i class="fa fa-step-forward" aria-hidden="true"></i></div>
        </div>
        <!-- 进度条 -->
        <div class="playerbar_timeprogress">
            <div class="progress" id="progress_box">
                <div class="progress_cache" id="progress_cache">
                    <!-- 缓冲条 -->
                </div>
                <div class="progress_curbar" id="progress_bar">
                    <div class="curbar_arc" id="progress_arc"></div>
                </div>
                <div class="time start" id="audio_currentTime">00:00</div>
                <div class="time end" id="audio_duration">00:00</div>
            </div>
        </div>
        <!-- 其他控制按钮组 -->
        <div class="playerbar_others">
            <div class="volume">
                <div class="mutebtn" id="muteBtn" title="静音"><i class="fa fa-volume-up" aria-hidden="true"></i></div>
                <div class="progress" id="vol_progress_box">
                    <div class="progress_curbar" id="vol_progress_bar">
                        <div class="curbar_arc" id="vol_progress_arc"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
