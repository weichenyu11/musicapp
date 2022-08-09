import service from "..";
//获取歌单详情页数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单歌曲
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
// 获取歌曲的歌词/lyric?id=33894312
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`lyric?id=${data}`
    })
}