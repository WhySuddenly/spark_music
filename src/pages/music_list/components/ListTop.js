import React , {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store/index';
import {Button , Input} from 'antd';
import {ConWarpper} from '../style';
const {Search} = Input;

class ListTop extends Component {
    render(){
        return (
            <ConWarpper>
                <div className='listbtn'>
                    <Button icon='unordered-list' size='large' onClick={this.props.handleshowSongSheet}>歌单</Button>
                </div>
                <div className='searchinput'>
                     <Search 
                        size='large' 
                        onSearch={value => this.props.handleSearchSongList(value)} 
                        placeholder="搜索歌曲/歌手"
                    />
                </div>
            </ConWarpper>
        )
    }
}

const mapDispatch = (dispatch) => ({
    handleshowSongSheet(){
        dispatch(actionCreators.showSongSheet());
    },
    handleSearchSongList(value){
        dispatch(actionCreators.handleSearchSongList(value));
    }
})


export default connect(null,mapDispatch) (ListTop);