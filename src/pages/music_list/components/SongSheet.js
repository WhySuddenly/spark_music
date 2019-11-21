import React ,{ Component} from 'react';
import {connect} from 'react-redux';
import {SheetWarpper,SheetBox,SheetItem} from '../style';
import { actionCreators } from '../store';


class SongSheet extends Component {
    render(){
        const {songsheetlist,getSheetSongList,showsongsheet} = this.props;
        return (
            <SheetWarpper className={showsongsheet ? 'active' : ''}>
                <SheetBox>
                    <div className='con'>
                        {
                            songsheetlist.map((item,index) => {
                                return (
                                    <SheetItem key={index} onClick={() => getSheetSongList(item.get('id'))} >
                                        <div className='imgbox'><img src={item.get('coverImgUrl')} alt=''/></div>
                                        <p title={item.get('name')}>
                                        {item.get('name').length > 7 ? item.get('name').slice(0,7)+'...' : item.get('name')} 
                                        </p>
                                    </SheetItem>
                                )
                            })
                        }
                   </div> 
                </SheetBox>
            </SheetWarpper>
        )
    }

}

const mapDispatch = (dispatch) => ({
    getSheetSongList(sheetid){
        dispatch(actionCreators.getSheetSongList(sheetid))
    }
});


const mapState = (state) => ({
    songsheetlist : state.getIn(['musiclist','songsheet']),
    showsongsheet: state.getIn(['musiclist','showsongsheet'])
})

export default connect(mapState,mapDispatch)(SongSheet);