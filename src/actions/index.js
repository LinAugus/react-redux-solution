import * as api from '../api';


export const request = api.request;

/*
 * action 类型
 */

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

/*
 * action 创建函数
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


// 异步action
export const getList = () => async (dispatch) => {
    // 请求开始
    dispatch(fetchDataStart());
    const res = await request();
    
    dispatch(fetchDataSuccess(res));
    
}