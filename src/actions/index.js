
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
export const getList = () => dispatch => {
    // 请求开始
    dispatch(fetchDataStart());

    get().then(res => {
        dispatch(fetchDataSuccess(res));
    })
}


// api层

function get() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'allin'
            })
        }, 1000)
    })
}