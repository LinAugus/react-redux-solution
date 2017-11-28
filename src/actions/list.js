// api 服务
import * as api from '../api';

/*
 * action constants defined
 */

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

/*
 * action create
 */

export const fetchDataStart = () =>{
    return {
        type: FETCH_START
    }
};

export const fetchDataSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

/**
 * async action create
 */
export const getList = () => async (dispatch) => {
    // 请求开始
    dispatch(fetchDataStart());
    const res = await api.request();
    // 请求成功
    dispatch(fetchDataSuccess(res));
    
}