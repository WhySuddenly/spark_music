import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';
import axios from 'axios';


const addSongSheet = (result) => ({
    type: actionTypes.ADD_SONG_SHEET,
    songsheetlist: fromJS(result)
});

const addDefaultSongList = (result) => ({
    type: actionTypes.DEFAULT_SONG_LIST,
    defaultsonglist: fromJS(result)
});

const addSearchSongList = (result,searchvalue) => ({
    type:actionTypes.ADD_SEARCH_SONG_LIST,
    searchsonglist: fromJS(result),
    searchvalue
});

const getSheetSong = (result) =>({
    type: actionTypes.GET_SHEET_SONG,
    sheetsong:fromJS(result),
});

const getDefaultSong = (id,url,picUrl,songname,singer,lyric) => ({
    type: actionTypes.DAFAULT_SONG_URL,
    id,
    url,
    picUrl,
    songname,
    singer,
    lyric
});

const addPlayList = () => ({
    type: actionTypes.ADD_PLAY_LIST
});


const getNextSong = (index,id,url,picUrl,songname,singer,lyric) => ({
    type:actionTypes.GET_NEXT_SONG,
    index,
    id,
    url,
    picUrl,
    songname,
    singer,
    lyric
});

const getPrevSong = (index,id,url,picUrl,songname,singer,lyric) => ({
    type:actionTypes.GET_PREV_SONG,
    index,
    id,
    url,
    picUrl,
    songname,
    singer,
    lyric
});

const getThisSongMes = (index,id,url,picUrl,songname,singer,lyric) => ({
    type:actionTypes.GEY_THIS_SONG_MES,
    index,
    id,
    url,
    picUrl,
    songname,
    singer,
    lyric
})


export const getDefaultSongUrl = () => {
    return(dispatch) => {
        axios.get('http://localhost:4000/playlist/detail?id=3778678')
        .then((res) => {
            const id = res.data.playlist.tracks[0].id;
            axios.all([
                axios.get('http://localhost:4000/song/url?id='+id),
                axios.get('http://localhost:4000/song/detail?ids='+id),
                axios.get('http://localhost:4000/lyric?id='+id),
            ])
            .then(axios.spread(function(urlResp,picResp,lrcResp){
                const url = urlResp.data.data[0].url;
                const picUrl = picResp.data.songs[0].al.picUrl;
                const songname = picResp.data.songs[0].name;
                const singer = picResp.data.songs[0].ar;
                const lyric = lrcResp.data.lrc.lyric;
                dispatch(getDefaultSong(id,url,picUrl,songname,singer,lyric));
            }))
            .catch(() => {
                console.log('error');
            })

        })
        .catch(() => {
            console.log('error');
        })
        
    }
};

export const  getSongSheet = () => {
    return (dispatch) =>{
        axios.get('http://localhost:4000/toplist')
        .then((res) => {
            const result = res.data.list;
            dispatch(addSongSheet(result));
        })
        .catch(() => {
            console.log('error');
        });
    }
};


export const showSongSheet = () => ({
    type: actionTypes.SHOW_SONG_SHEET,
});

// export const handleSearch = (search_value) => ({
//     type: actionTypes.ADD_SEARCH_VALUE,
//     search_value
// });

export const handleDefaultSongList = () => {
    return (dispatch) =>{
        axios.get('http://localhost:4000/playlist/detail?id=3778678')
        .then((res) => {
            const result = res.data.playlist.tracks;
            const arry = [];
            for(let i = 0; i < result.length ; i++ ){
                arry.push({
                    id:result[i].id,
                    name:result[i].name,
                    al:{
                        id:result[i].al.id,
                        name:result[i].al.name,
                        // picUrl:result[i].al.picUrl
                    },
                    ar:result[i].ar
                })
            }
            dispatch(addDefaultSongList(arry));
            // console.log(arry);
            // console.log(fromJS(arry))
        })
        .catch(() => {
            console.log('error');
        });
    }
};


export const handleSearchSongList = (searchvalue) => {
    return(dispatch) =>{
        axios.get('http://localhost:4000/search?keywords='+searchvalue)
        .then((res) =>{
            const result = res.data.result.songs;
            const arry = [];
            for(let i = 0; i < result.length ; i++ ){
                arry.push({
                    id:result[i].id,
                    name:result[i].name,
                    al:{
                        id:result[i].album.id,
                        name:result[i].album.name,
                        // picUrl:result2[0].al.picUrl
                    },
                    ar:result[i].artists
                })
            }
            // console.log(arry)
            dispatch(addSearchSongList(arry,searchvalue));
        })
        .catch(() => {
            console.log('error')
        })
    }
};

export const getSheetSongList = (sheetid) =>{
    return(dispatch) =>{
        axios.get('http://localhost:4000/playlist/detail?id='+sheetid)
        .then((res) => {
            const result = res.data.playlist.tracks;
            dispatch(getSheetSong(result));
        })
        .catch(() => {
            console.log('error')
        })
    }
};

export const handleAddPLayList = (playlist) => {
    return(dispatch) => {
        if(playlist.toJS().length === 0){
            dispatch(addPlayList());
            // console.log('jj')
        }
    }
};

export const handlePlayIcon = () => ({
    type:actionTypes.HANDEL_PLAY_ICON
});

export const handleStopTime = (time) => ({
    type:actionTypes.SET_STOP_TIME,
    time
});

export const handleNextSong = (currentindex,list) => {
    let index = currentindex + 1;
    if(index >= list.toJS().length){
        index = 0 ;
    }
    const id = list.toJS()[index].id;
    return(dispatch) => {
        axios.all([
            axios.get('http://localhost:4000/song/url?id='+id),
            axios.get('http://localhost:4000/song/detail?ids='+id),
            axios.get('http://localhost:4000/lyric?id='+id),
        ])
        .then(axios.spread(function(urlResp,picResp,lrcResp){
            const url = urlResp.data.data[0].url;
            const picUrl = picResp.data.songs[0].al.picUrl;
            const songname = picResp.data.songs[0].name;
            const singer = picResp.data.songs[0].ar;
            const lyric = lrcResp.data.lrc.lyric;
            dispatch(getNextSong(index,id,url,picUrl,songname,singer,lyric));
        }))
        .catch(() => {
            console.log('error');
        })
        // console.log(list.toJS()[index].id);
    }
};

export const handlePrevSong = (currentindex,list) => {
    let index = currentindex - 1;
    if(index < 0){
        index = list.toJS().length - 1;
    }
    const id = list.toJS()[index].id;
    return(dispatch) => {
        axios.all([
            axios.get('http://localhost:4000/song/url?id='+id),
            axios.get('http://localhost:4000/song/detail?ids='+id),
            axios.get('http://localhost:4000/lyric?id='+id),
        ])
        .then(axios.spread(function(urlResp,picResp,lrcResp){
            const url = urlResp.data.data[0].url;
            const picUrl = picResp.data.songs[0].al.picUrl;
            const songname = picResp.data.songs[0].name;
            const singer = picResp.data.songs[0].ar;
            const lyric = lrcResp.data.lrc.lyric;
            dispatch(getPrevSong(index,id,url,picUrl,songname,singer,lyric));
        }))
        .catch(() => {
            console.log('error');
        })
    }
};

export const handleSongPlay = () => ({
    type:actionTypes.HANDLE_SONG_PLAY
});

export const handleThisSongPlay = (index,defaultsonglist) => {
    let id = defaultsonglist.toJS()[index].id;
    return(dispatch) => {
        axios.all([
            axios.get('http://localhost:4000/song/url?id='+id),
            axios.get('http://localhost:4000/song/detail?ids='+id),
            axios.get('http://localhost:4000/lyric?id='+id),
        ])
        .then(axios.spread(function(urlResp,picResp,lrcResp){
            const url = urlResp.data.data[0].url;
            const picUrl = picResp.data.songs[0].al.picUrl;
            const songname = picResp.data.songs[0].name;
            const singer = picResp.data.songs[0].ar;
            const lyric = lrcResp.data.lrc.lyric;
            dispatch(getThisSongMes(index,id,url,picUrl,songname,singer,lyric));
        }))
        .catch(() => {
            console.log('error');
        })
        // console.log(id);
    }
};

export const handleSongDuration = (time) => ({
    type:actionTypes.SET_SONG_DURATION,
    time
});

export const handleSongCurrentTime = (time) => ({
    type:actionTypes.SET_SONG_CURRENT_TIME,
    time
});

export const getAudio = (audio) => ({
    type:actionTypes.GET_AUDIO,
    audio
});

export const getBarStopTime = (time) => ({
    type:actionTypes.BAR_STOP_TIME,
    time
});

// export const getLyricIndex = (index) => ({
//     type:actionTypes.GET_LYRIC_INDEX,
//     index
// })









