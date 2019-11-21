import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    showsongsheet:false,//是否显示歌单面板
    sheetid:3778678,//歌单id
    songsheet:[],//歌单列表
    searchvalue:null,//搜索词
    defaultsonglist:[],//展示面板的音乐列表
    playlist:[],//待播放的音乐列表,
    issongplay:false,//歌曲是否在播放
    currentIndex:0,//当前播放歌曲index
    songid:0,//歌曲id
    songurl:'',//歌曲url
    songname:'',//歌名
    singer:'',//歌手
    picUrl:'',//专辑封面
    stoptime:0,//暂停的时间
    duration:'00:00',//歌曲时长
    lyric:'',//歌词
    lyricindex:0 ,//歌词下标
    
});


export default (state = defaultState , action) => {
    switch(action.type) {
        case actionTypes.SHOW_SONG_SHEET:
            return state.merge({
                searchvalue:null,
                showsongsheet:true,
            })
        case actionTypes.ADD_SONG_SHEET:
            return state.set('songsheet',fromJS(action.songsheetlist));
        case actionTypes.DEFAULT_SONG_LIST:
            return state.set('defaultsonglist',fromJS(action.defaultsonglist));
        case actionTypes.ADD_SEARCH_SONG_LIST:
            return state.merge({
                defaultsonglist:fromJS(action.searchsonglist),
                searchvalue:action.searchvalue,
                showsongsheet:false
            });
        case actionTypes.GET_SHEET_SONG:
            return state.merge({
                defaultsonglist:fromJS(action.sheetsong),
                searchvalue:null,
                showsongsheet:false,
                searchsonglist:[]
            });
        case actionTypes.DAFAULT_SONG_URL: 
            return state.merge({
                songid:action.id,
                songurl:action.url,
                picUrl:action.picUrl,
                songname:action.songname,
                singer:action.singer,
                lyric:action.lyric
            });
        case actionTypes.ADD_PLAY_LIST :
            return state.merge({
                playlist:state.get('defaultsonglist')
            });
        case actionTypes.HANDEL_PLAY_ICON:
            if(state.get('issongplay')){
                return state.set('issongplay',false);
            }
            else{
                return state.set('issongplay',true);
            }
        case actionTypes.SET_STOP_TIME:
            return state.set('stoptime',action.time)
        case actionTypes.GET_NEXT_SONG:
            return state.merge({
                currentIndex:action.index,
                songid:action.id,
                songurl:action.url,
                picUrl:action.picUrl,
                songname:action.songname,
                singer:action.singer,
                lyric:action.lyric,
                stoptime:0,
                issongplay:true
            });
        case actionTypes.GET_PREV_SONG:
            return state.merge({
                currentIndex:action.index,
                songid:action.id,
                songurl:action.url,
                picUrl:action.picUrl,
                songname:action.songname,
                singer:action.singer,
                lyric:action.lyric,
                stoptime:0,
                issongplay:true
            });
        case actionTypes.HANDLE_SONG_PLAY:
            return state.merge({
                issongplay:true,
                playlist:state.get('defaultsonglist')
            });
        case actionTypes.GEY_THIS_SONG_MES :
            return state.merge({
                currentIndex:action.index,
                songid:action.id,
                songurl:action.url,
                picUrl:action.picUrl,
                songname:action.songname,
                singer:action.singer,
                lyric:action.lyric,
                stoptime:0,
                issongplay:true,
                playlist:state.get('defaultsonglist')
            });
        case actionTypes.SET_SONG_DURATION:
            return state.set('duration',action.time);
        case actionTypes.SET_SONG_CURRENT_TIME:
            return state.set('currenttime',action.time);
        case actionTypes.GET_AUDIO:
            return state.set('audiodom',action.audio);
        case actionTypes.BAR_STOP_TIME:
            return state.merge({
                stoptime:action.time,
                issongplay:true
            });
        // case actionTypes.GET_LYRIC_INDEX:
        //     return state.set('lyricindex',action.index);
        default:
            return state;
    }
}