import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    list: ['我是home']
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}