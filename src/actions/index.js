/*
 * action 类型
 */

export const GET_LIST = 'GET_LIST';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
/*
 * action 创建函数
 */

function fetchDataStart() {
    return {
        type: 'FETCH_DATA_START'
    };
}

function fetchDataSuccess(payload) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload
    }
}

export function getList(payload) {
    return (dispatch) => {
        dispatch(fetchDataStart());
        axios.get('https://news-at.zhihu.com/api/4/news/latest').then(res => {
            dispatch(fetchDataSuccess(res.data));
        })
    }
}