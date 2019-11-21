import React , {Component} from 'react';
import {connect} from 'react-redux';
import ListTop from './components/ListTop';
import List from './components/List';
import SongSheet from './components/SongSheet';
import PlayPanel from './components/PlayPanel';
import {actionCreators} from './store';
import {ListContainer,AudioContainer} from './style';

class MusicList extends Component {
   
    render(){
        return (
            <div className='musiclist'>
                <ListContainer>
                    <ListTop  />
                    <List />
                    <SongSheet />
                </ListContainer>
                <AudioContainer>
                    <PlayPanel/>
                </AudioContainer>
            </div>
        )
    }
    componentDidMount(){
        this.props.handleDefaultSongList();
        this.props.getSongSheet();
        this.props.getDefaultSongUrl();
    }

    
  
}

const mapDispatch = (dispatch) => ({
    getSongSheet(){
        dispatch(actionCreators.getSongSheet());
    },
    handleDefaultSongList(){
        dispatch(actionCreators.handleDefaultSongList());
    },
    getDefaultSongUrl(){
        dispatch(actionCreators.getDefaultSongUrl());
    }
});

export default connect (null,mapDispatch)(MusicList);