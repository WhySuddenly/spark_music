import {combineReducers} from 'redux-immutable';
// import {reducer as playpanelReducer} from '../pages/play_panel/store/index';
import {reducer as musiclistReducer} from '../pages/music_list/store/index';

const reducer = combineReducers({
    // playpanel:playpanelReducer,
    musiclist :musiclistReducer
});

export default reducer;