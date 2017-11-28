import {
    combineReducers
} from 'redux'

import { FETCH_START, FETCH_SUCCESS } from '../actions'

function list(state={}, action) {
    switch(action.type) {
    case FETCH_START:
        return state;
    case FETCH_SUCCESS:
        console.log('work2', action)
        return Object.assign({}, state, action.paylaod);
    default:
        return state;
    }
}

const store = combineReducers({
    list
})

export default store