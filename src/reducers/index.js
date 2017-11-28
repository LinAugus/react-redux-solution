import {
    combineReducers
} from 'redux'

import { FETCH_START, FETCH_SUCCESS } from '../actions/list'

/**
 * model: list curd
 * @param {*} state 
 * @param {*} action 
 */
function list(state={}, action) {
    switch(action.type) {
    case FETCH_START:
        return state;
    case FETCH_SUCCESS:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}

/**
 * reducer compose
 */
const store = combineReducers({
    list
})

export default store