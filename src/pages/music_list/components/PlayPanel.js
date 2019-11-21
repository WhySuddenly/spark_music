import React , {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {LyricContainer,LCon,PicBox,SongMes,LyricBox,LyricCon,AudioBox,AudioCon,ProgressBox,Plcon,SongList,MSlider} from '../style';
import {Icon,Slider} from 'antd';

const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1478410_qs0pzetnyf8.js', // 在 iconfont.cn 上生成
  });

class PlayPanel extends Component {
    render(){
        const handleSongVolume = value => {
            const myaudio = this.audio;
            myaudio.volume = value/10;
        }
        // 进度条
        let isDown = false;
        let x1,x2,x3 = null ;
        const  mouseDown = (event) => {
            const e = event || window.event;
            isDown = true;
            x1=e.pageX;
            window.event? window.event.cancelBubble = true : e.stopPropagation();
        }
        const  mouseMove = (event) => {
            const e = event || window.event;
            if(isDown){
                x2=e.pageX;
                x3 = x2-x1;
                x1=x2;
                const dragbar = this.dragbar;
                const w = dragbar.clientWidth;
                const bar_width =  w+x3+'px';
                dragbar.style.width = bar_width;
                if(dragbar.clientWidth >= 710){
                    dragbar.style.width = '710px';
                }
                if(dragbar.clientWidth <= 0){
                    dragbar.style.width = '0px';
                }
                window.event? window.event.cancelBubble = true : e.stopPropagation();
            }
        }
        const  mouseUp = (event) => {
            isDown = false;
            const dragbar = this.dragbar;
            const clickbar = this.clickbar;
            const audio = this.audio;
            const stoptime = (dragbar.clientWidth/clickbar.clientWidth)*audio.duration;
            // console.log(stoptime,audio.currentTime);
            this.props.getBarStopTime(stoptime);
        }

        const changeBar = (event) => {
            const e = event || window.event;
            const dragbar = this.dragbar;
            const clickbar = this.clickbar;
            const audio = this.audio;
            dragbar.style.width = e.nativeEvent.offsetX + 'px';
            const stoptime = (dragbar.clientWidth/clickbar.clientWidth)*audio.duration;
            this.props.getBarStopTime(stoptime);
            window.event? window.event.cancelBubble = true : e.stopPropagation();
        }

        const {issongplay,songurl,handleAddPLayList,playlist,handlePlayIcon,currentIndex,duration,picUrl,songname,singer} = this.props;
        return (
            <div>
                <LyricContainer>
                    <LCon>
                        <PicBox>
                            <img src={picUrl} alt='' />
                        </PicBox>
                        <SongMes>
                            <p>{songname}</p>
                            <p className='singer'>歌手：{this.getSinger(singer)}</p>
                        </SongMes>
                        <LyricBox  ref={(lycb) => {this.lycbox = lycb }}>
                            <LyricCon ref={(lyc) => {this.lyccon = lyc }}>
                                {
                                   this.getLyric().map((item,index) => {
                                       return <p key={index}>{item.s} </p>
                                   }) 
                                }
                            </LyricCon>
                        </LyricBox>
                    </LCon>
                </LyricContainer>
                <AudioBox>
                    <AudioCon>
                        <audio ref={(audio) => {this.audio = audio}} src={songurl}/>
                        <Icon 
                            type="step-backward" 
                            theme="filled" 
                            className='white-color' 
                            onClick={() => this.handlePrevSong(currentIndex,playlist)}
                        />
                        <Icon 
                            type={issongplay ? 'pause-circle' : 'play-circle'} 
                            theme="filled" 
                            className='white-color playbtnsize'
                            onClick={() =>{ handleAddPLayList(playlist);handlePlayIcon()}}
                        />
                        <Icon 
                            type="step-forward" 
                            theme="filled" 
                            className='white-color' 
                            onClick={() => this.handleNextSong(currentIndex,playlist)}
                        />
                        <ProgressBox>
                            <span ref={span => {this.ctime = span}}></span>
                            <MSlider>
                                {/* <div className='buffer-bar'></div> */}
                                <div className='drag-bar' ref= {div => {this.dragbar = div} }>
                                    <div className='click-bar' ref= {div => {this.clickbar = div} } onClick={changeBar}  ><i></i></div>
                                    <span className='spot' onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove}></span>
                                </div>
                            </MSlider>
                            <span>{duration}</span>
                            {/* <Slider /> */}
                        </ProgressBox>
                        <MyIcon type="icon-volume-up" className='white-color volume' />
                        {/* <MyIcon type="icon-volume-mute-fill" className='white-color volume' /> */}
                        {/* <Icon type="sound" theme="filled" className='white-color volume'/> */}
                        <Slider defaultValue={5} max={10} className='volume-bar' tipFormatter={null} onChange={handleSongVolume}/>
                        <Plcon>
                            <MyIcon type="icon-wj-bflb" className='white-color play-list-icon' />
                            <div className='songs-num'>999</div>
                            {/* <SongList></SongList> */}
                        </Plcon>
                    </AudioCon>
                </AudioBox>
                
            </div>
            
            
        )
    }

    componentDidMount () {
        const myaudio = this.audio;
        myaudio.load();
        myaudio.onended = () => {
            this.handleNextSong(this.props.currentIndex,this.props.playlist);
        }
        myaudio.ontimeupdate = () => {
            this.ctime.innerText = this.handleSongTime(myaudio.currentTime);
            const i = Math.floor(myaudio.currentTime)/Math.floor(myaudio.duration)
            this.dragbar.style.width = Math.floor(i*710) + 'px';
            for(let i = 0;i<this.getLyric_t().length;i++){
                if(i === this.getLyric_t().length-1 && myaudio.currentTime >= this.getLyric_t()[i]){
                    this.LineHeight(i);
                }
                if(this.getLyric_t()[i] <= myaudio.currentTime && this.getLyric_t()[i+1] >= myaudio.currentTime ){
                    this.LineHeight(i);
                }
            }
            
        }
        myaudio.oncanplaythrough =() => {
            // index = 0;
        }
        myaudio.oncanplay = () => {
            if(this.props.songurl){
                this.props.handleSongDuration(this.handleSongTime(myaudio.duration));
            }
            else{
                console.log('加载失败，即将播放下一首');
                this.handleNextSong(this.props.currentIndex,this.props.playlist);
            }
            
        }
    }

    componentDidUpdate(){
        if(this.props.issongplay){
            this.handlePlay();
        }
        else{
            this.handlePause();
        }
    }

    componentWillUnmount(){
        this.timer && clearInterval (this.timer);
    }   

    handlePlay(){
        const myaudio = this.audio;
        myaudio.load();
        myaudio.currentTime = this.props.stoptime;
        const playPromise = myaudio.play();
        if(playPromise){
            playPromise.then(() => {
                setTimeout(() => {
                    console.log('done');
                },myaudio.duration * 1000)
            }).catch(() => {
                console.log('加载失败')
            })
        }
    }
    handlePause(){
        const myaudio = this.audio;
        myaudio.pause();
        this.props.handleStopTime(myaudio.currentTime);
        this.timer && clearInterval (this.timer);
    }
    handleNextSong(index,list){
        if(this.props.playlist.toJS().length === 0 ){
            this.props.handleSongPlay();
            
        }
        else{
            this.props.handleNextSong(index,list);
        }
    }
    handlePrevSong(index,list){
        if(this.props.playlist.toJS().length === 0 ){
            this.props.handleSongPlay();
            
        }
        else{
            this.props.handlePrevSong(index,list);
        }
    }
    handleSongTime(time){
        let min = Math.floor(time/60);
        let sec = Math.floor(time%60);
        if(time){
            if(min === 0){
                min = '00';
            }else  if(min < 10){
                min = '0'+ min
            }
            if(sec === 0 ){
                sec = '00' ;
            }else if(sec < 10){
                sec = '0'+sec ;
            }
            return min+':'+sec
        }else{
            return '00:00'
        }
        
    }
    

    getSinger(arry){
        const ar = [];
        for(let i = 0 ; i < arry.length ; i++){
            ar.push(arry[i].name);
        }
        return ar.join('/');
    }
    getLyric(){
        const lyc = [];
        const arry = this.props.lyric.split('[');
        for(let i = 1;i< arry.length;i++){
            const t = arry[i].substring(0,arry[i].indexOf(']'));
            const str =  arry[i].substring(arry[i].indexOf(']')+1,arry[i].length)
            if(str.replace(/[\r\n]/g,"").length !==0){
                lyc.push({
                    t: t.split(':')[0]*60 + parseFloat(t.split(':')[1]),
                    s: str
                })
            }
        }
        return lyc;
    }
    getLyric_t(){
        const arry = this.getLyric();
        const t_arry = [];
        for(let i = 1;i< arry.length;i++){
            t_arry.push(arry[i].t);
        }
        
        return t_arry;
        
    }

    LineHeight(index){
        const lycbox = this.lycbox;
        const lyccon = this.lyccon;
        const p = lyccon.getElementsByTagName('p');
        for(let i = 0;i< p.length;i++){
            p[i].classList.remove('active');
            p[index+1].classList.add('active');
        }
        if(index < 3){
            lycbox.scrollTop = 0 ;
        }
        else if (index >= 3 && index < this.getLyric().length - 3){
            lycbox.scrollTop = (index-2)*25;
        }
        
    }

    


}

const mapDispatch = (dispatch) => ({
    handleAddPLayList(playlist){
        dispatch(actionCreators.handleAddPLayList(playlist));
    },
    handleStopTime(time){
        dispatch(actionCreators.handleStopTime(time));
    },
    handlePlayIcon(){
        dispatch(actionCreators.handlePlayIcon());
    },
    handleNextSong(index,list){
        dispatch(actionCreators.handleNextSong(index,list));
    },
    handlePrevSong(index,list){
        dispatch(actionCreators.handlePrevSong(index,list));
    },
    handleSongPlay(){
        dispatch(actionCreators.handleSongPlay());
    },
    handleSongDuration(time){
        dispatch(actionCreators.handleSongDuration(time));
    },
    handleSongCurrentTime(time){
        dispatch(actionCreators.handleSongCurrentTime(time));
    },
    getAudio(audio){
        dispatch(actionCreators.getAudio(audio));
    },
    getBarStopTime(time){
        dispatch(actionCreators.getBarStopTime(time));
    }

});

const mapState = (state) => ({
    issongplay:state.getIn(['musiclist','issongplay']),
    songurl:state.getIn(['musiclist','songurl']),
    playlist:state.getIn(['musiclist','playlist']),
    stoptime:state.getIn(['musiclist','stoptime']),
    currentIndex:state.getIn(['musiclist','currentIndex']),
    duration:state.getIn(['musiclist','duration']),
    currenttime:state.getIn(['musiclist','currenttime']),
    picUrl:state.getIn(['musiclist','picUrl']),
    songname:state.getIn(['musiclist','songname']),
    singer:state.getIn(['musiclist','singer']),
    lyric:state.getIn(['musiclist','lyric']),
})

export default connect(mapState,mapDispatch,null,{
    forwardRef:true
})(PlayPanel);