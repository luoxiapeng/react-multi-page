import { combineReducers } from 'redux-immutable';
import {reducer as header} from '../../../component/header/store';
import { reducer as headerReducer } from '../common/Home/store';
const reducer = combineReducers({
    header:header,
    Home: headerReducer
});

export default reducer;
