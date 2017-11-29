// api 服务
import * as api from '../api';

import { createAction } from 'redux-action';

/*
 * action create
 */

export const fetchDataStart = createAction();
export const fetchDataSuccess = createAction(payload => payload);

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