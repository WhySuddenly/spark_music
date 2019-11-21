import React , {Component} from 'react';
import {connect} from 'react-redux';
import MusicList from '../music_list/index';
import { HomeWarpper ,Container} from './style';

class Home extends Component {
    render(){
        return(
            <HomeWarpper style={{backgroundImage:'url('+this.props.picUrl+')'}}>
                <div className='homebox' >
                    <Container>
                            <MusicList />
                    </Container>
                </div>
            </HomeWarpper>
        )
    }

}

const mapState = (state) => ({
    picUrl:state.getIn(['musiclist','picUrl']),
})

export default connect(mapState,null)(Home);