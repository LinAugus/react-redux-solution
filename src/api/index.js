import axios from 'axios';


import { fetchDataStart, fetchDataSuccess } from '../actions';

export const GET_LIST = 'GET_LIST';

export const getList = () => {
    return (dispatch) => {
        dispatch(fetchDataStart());
        axios.get('https://news-at.zhihu.com/api/4/news/latest').then(res => {
            console.log(res);
            dispatch(fetchDataSuccess({
                name: 'allin'
            }));
        })
    }
}
