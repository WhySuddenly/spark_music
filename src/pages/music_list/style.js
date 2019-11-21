import styled from 'styled-components';

export const ConWarpper = styled.div`
    padding:10px;
    overflow:hidden;
    .listbtn{float:left;margin-right:30px;}
    .searchinput{
        float:left;
        width:250px;
    }
`;

export const ListContainer = styled.div`
    width:800px;
    margin-bottom:50px;
`;

export const RightBox = styled.div`
    position:absolute;
    width:400px;
    right:0;
    bottom:155px;
`;

// 歌曲列表
export const ListWarpper =styled.div`
    display:none;
    margin-top:20px;
    color:rgba(255,255,255,0.8);
    span{display:inline-block;box-sizing: border-box;}
    .top{
        padding-bottom:20px;
        border-bottom:1px solid rgba(255,255,255,0.3);
    }
    .t1{
        position:relative;
        display:inline-block;box-sizing: border-box;
        width:60%;
        padding-left:50px;
    }
    .t2{display:inline-block;box-sizing: border-box;width:20%;}
    .icon-hidden{display:none !important;}
    &.active{display:block !important;}
`;

export const ListBox = styled.div`
    overflow-y:auto;
    max-height:400px;
    /*滚动条的宽度*/
    ::-webkit-scrollbar {
        width:4px;
        height:4px;
    }
    /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
    ::-webkit-scrollbar-track {
        display:none;
    }
        /*滚动条的设置*/
        ::-webkit-scrollbar-thumb {
        background-color:rgba(255,255,255,0);
    }
    /*滚动条移上去的背景*/
    ::-webkit-scrollbar-thumb:hover {
        background-color:rgba(255,255,255,0.5);
    }

    :hover{
        /*滚动条的设置*/
        ::-webkit-scrollbar-thumb {
            background-color:rgba(255,255,255,0.5);
            background-clip:padding-box;
            min-height:28px;
            -webkit-border-radius: 2em;
            -moz-border-radius: 2em;
            border-radius:2em;
        }
    }
    .list-item{
        cursor:default;
        padding:18px 0 ;
        border-bottom:1px solid rgba(255,255,255,0.1);
        :last-child{border:none;}
        :hover{
            color:#fff;
            font-weight:bold;
            .control-icon{visibility:visible;}
        }
        .l1{
        position:relative;
        display:inline-block;box-sizing: border-box;
        width:60%;
            i{
                display:inline-block;
                width:50px;
                text-align:center;
            }
        }
        .t2,.l2{display:inline-block;box-sizing: border-box;width:20%;}
        .control-icon{
            display:block;
            position:absolute;
            right:10px;
            top:-6px;
            visibility:hidden;
            i{
                width:30px;
                padding:10px 0 ;
                cursor:pointer;
            }
        }
        &.active{color:#fff;font-weight:bold;}
    }
    .baseline{color:rgba(255,255,255,0.2);font-size:12px;padding-top:20px;text-align:center;}
    
    
`;


// 歌单
export const SheetWarpper = styled.div`
    margin-top:40px;
    display:none;
    &.active{display:block !important;}
`;

export const SheetBox = styled.div`
    overflow-y:auto;
    overflow-x:hidden;
    max-height:450px;
    /*滚动条的宽度*/
    ::-webkit-scrollbar {
        width:4px;
        height:4px;
    }
    /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
    ::-webkit-scrollbar-track {
        display:none;
    }
        /*滚动条的设置*/
        ::-webkit-scrollbar-thumb {
        background-color:rgba(255,255,255,0);
    }
    /*滚动条移上去的背景*/
    ::-webkit-scrollbar-thumb:hover {
        background-color:rgba(255,255,255,0.5);
    }

    :hover{
        /*滚动条的设置*/
        ::-webkit-scrollbar-thumb {
            background-color:rgba(255,255,255,0.5);
            background-clip:padding-box;
            min-height:28px;
            -webkit-border-radius: 2em;
            -moz-border-radius: 2em;
            border-radius:2em;
        }
    }
    .con{width:916px;padding-left:10px;}
`;

export const SheetItem = styled.div`
    display:inline-block;
    width:110px;
    text-align:center;
    font-size:13px;
    margin:10px 113px 10px 0;
    cursor:pointer;
    .imgbox{
        width:110px;
        height:110px;
        background:#666666;
        border-radius:5px;
        overflow:hidden;

        img{
            width:100%;
        }
    }
    p{
        width:100%;
        padding-top:10px;
        color:#fff;
    }
`;


// 播放器
export const AudioContainer = styled.div`
    position:relative;
    width:100%;
    height:120px;
`;
export const AudioBox = styled.div`
    position:fixed;
    bottom:40px;
    width:1200px;
    margin:0 auto;
`;

export const AudioCon = styled.div`
    position: relative;
    padding-top:20px;
    audio{
        position:absolute;
        visibility:hidden;
    }
    .white-color{
        color:#ffffff;
        font-size:30px;
        margin-right:10px;
        vertical-align:middle;
    }
    .playbtnsize{font-size:35px;}
    .volume{font-size:18px;margin-left:20px;}
    .volume-bar{
        width:90px;
        margin:0 0 0 5px;
        display:inline-block;
        vertical-align:middle;
    }
    
`;

export const ProgressBox = styled.div`
    display:inline-block;
    margin-left:30px;
    span{
        display:inline-block;
        vertical-align:middle;
        padding:0 5px;
        color:#fff;
    }
`;

export const MSlider = styled.div`
        position:relative;
        width:710px;
        height:5px;
        background:#666666;
        margin:0 15px;
        display:inline-block;
        vertical-align:middle;
        border-radius:5px;
        .buffer-bar{
            position:absolute;
            width:710px;
            height:5px;
            top:0;
            left:0;
            border-radius:5px;
            background:rgba(255,255,255,0.5);
        }
        .drag-bar{
            position:absolute;
            width:0px;
            height:5px;
            top:0;
            left:0;
            border-radius:5px;
            background:#fff;
            .spot{
                display:block;
                position:absolute;
                width:13px;
                height:13px;
                padding:0;
                border:2px solid #999999;
                top:-5px;
                right:0;
                border-radius:50%;
                background:#ffffff;
                z-index:2;
            }
            .click-bar{
                position:absolute;
                left:0;
                top:0;
                width:710px;
                height:5px;
                background:rgba(255,255,255,0);
            }
        }
`;

export const Plcon = styled.div`
    position:relative;
    display:inline-block;
    vertical-align:middle;
    .play-list-icon{
        position:relative;
        font-size:18px;
        margin-left:15px;
        margin-right:0;
        z-index:3;
    }
    .songs-num{
        width:33px;
        height:18px;
        margin-left:-4px;
        padding-left:6px;
        font-size:12px;
        color:#fff;
        display:inline-block;
        vertical-align:middle;
        background:#999;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
    }
`;

export const SongList = styled.div`
    position:absolute;
    right:0;
    bottom:30px;
    width:400px;
    height:300px;
    background:rgba(255,255,255,0.8);
`;

// 歌词

export const LyricContainer = styled.div`
    position:fixed;
    width:400px;
    right:170px;
    bottom:150px;
    height:550px;
`;

export const LCon = styled.div`
    padding:0 20px;
    margin:20px 0;
    max-height:530px;
    overflow:hidden;
`;

export const PicBox = styled.div`
    width:180px;
    height:180px;
    margin: 0 auto 20px auto;
    border-radius:10px;
    overflow:hidden;
    background:#999999;
    img{
        display:block;
        width:100%;
        height:100%;
        border-radius:10px;
    }
`;

export const LyricBox = styled.div`
   max-height:240px;
   overflow:hidden;
   text-align:center;
`;

export const LyricCon = styled.div`
    position:relative;
    color:#fff;
    p{
        color:rgba(255,255,255,0.7);
        margin-bottom:5px;
    }
    p.active{
        color:rgba(255,255,255,1)
    }
`;

export const SongMes = styled.div`
    color:#fff;
    font-size:14px;
    font-weight:bold;
    letter-spacing:2px;
    text-align:center;
    margin-bottom:20px;
    p{margin-bottom:5px;}
    .singer{font-size:14px;font-weight:normal;}
`;

