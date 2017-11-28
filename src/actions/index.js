
/*
 * action 类型
 */

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

/*
 * action 创建函数
 */

export const fetchDataStart = (payload)  =>{
    return {
        type: FETCH_START,
        payload
    }
};

export const fetchDataSuccess = (payload) => {
    console.log('work', payload)
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

export const getList = () => dispatch => {
    // let res = await get();
    // dispatch(fetchDataSuccess(res))
    dispatch({
        type: FETCH_START
    });
    get().then(res => {
        dispatch(fetchDataSuccess(res));
    }).catch(err => {
        dispatch(fetchDataSuccess(err));
    })
}


// api

function get() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'allin'
            })
        }, 1000)
    })
}