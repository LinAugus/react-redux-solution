import {
    combineReducers
} from 'redux'

import { createReducer } from 'redux-action';

import { fetchDataStart, fetchDataSuccess} from '../actions/list'

/**
 * model: list curd
 * @param {*} state 
 * @param {*} action 
 */

let state = {};

const list = createReducer(state, {
    [fetchDataStart]: (state) => ({state}),
    [fetchDataSuccess]: (payload) => (Object.assign({}, state, payload))
})


/**
 * reducer compose
 */
const store = combineReducers({
    list
})

export default store