import React , {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store/index';
import {ListWarpper,ListBox} from '../style';
import {Icon} from 'antd';

class List extends Component {
    
    render(){
        const {defaultsonglist,songid,showsongsheet,handleThisSongPlay} = this.props;
        return (
            <ListWarpper  className={showsongsheet ? '' : 'active'}>
                <div className='top'>
                    <span className='t1'>歌名</span>
                    <span className='t2'>歌手</span>
                    <span className='t2'>专辑</span>
                </div>
                <ListBox>
                    {
                        defaultsonglist.map((item,index) => {
                            return (
                                <div className={songid === item.get('id') ? 'list-item active' : 'list-item'} key={index} onClick={() => handleThisSongPlay(index,defaultsonglist)} >
                                    <div className='l1'>
                                        <i>{index+1}</i>
                                        <span title={item.get('name')}>
                                        {
                                            item.get('name').length > 24 ?
                                            item.get('name').slice(0,24)+'...' : 
                                            item.get('name')
                                        }
                                        </span>
                                        <span className='control-icon'>
                                            <Icon type="plus" />
                                            <Icon type="download" />
                                        </span>
                                    </div>
                                    <div className='l2'>
                                        {
                                            
                                            item.get('ar').map((item) => {
                                                return item.get('name')
                                            }).toJS().toString().length > 15 ? 
                                            item.get('ar').map((item) => {
                                                return item.get('name')
                                            }).toJS().slice(0,1).toString().slice(0,10)+'...'        :
                                            item.get('ar').map((item) => {
                                                return item.get('name')
                                            }).toJS().slice(0,1)
                                            
                                        }
                                        
                                    </div>
                                    <div className='l2'title={item.get('al').get('name')}>
                                        {
                                            item.get('al').get('name').length > 10 ?
                                            item.get('al').get('name').slice(0,10)+'...' : 
                                            item.get('al').get('name')
                                        }
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                    <p className='baseline'>我是有底线的</p>
                </ListBox>
            </ListWarpper>
        )
    }


}

const mapDispatch = (dispatch) => ({
    handleThisSongPlay(index,defaultsonglist){
        dispatch(actionCreators.handleThisSongPlay(index,defaultsonglist))
    }
});

const mapState = (state) => ({
    defaultsonglist : state.getIn(['musiclist','defaultsonglist']),
    songid:state.getIn(['musiclist','songid']),
    showsongsheet: state.getIn(['musiclist','showsongsheet']),
    playlist:state.getIn(['musiclist','playlist']),
});

export default connect(mapState,mapDispatch)(List);