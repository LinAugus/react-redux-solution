import {
    combineReducers
} from 'redux'

import api from '../api';

const store = combineReducers({
    api
})

export default api