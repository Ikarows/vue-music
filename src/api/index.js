/**
 * api 接口配置
 */

const BaseUrl = 'https://api.imjad.cn/cloudmusic'

export default {
    //获取歌单
    getPlayList ( id ) {
        return BaseUrl + '?type=playlist&id=' + id
    },
    //获取单个歌曲
    getMusic ( id ) {
        return BaseUrl + '?type=song&id=' + id + '&br=128000'
    },
    //获取评论
    getComments ( id ) {
        return BaseUrl + '?type=comments&id=' + id;
    }
}
