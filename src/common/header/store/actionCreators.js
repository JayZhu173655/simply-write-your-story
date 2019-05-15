//import * as constants.js from './constants.js';
import {constants} from './';
import axios from 'axios';
import {fromJS} from 'immutable';

// 不需要导出的建议放在顶部位置， 看起来美观，易于阅读
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});
const getFootList = (data) => ({
    type: constants.GET_FOOTER_LIST,
    footerList: fromJS(data)
});
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});
export const getList = () => {
    return (dispatch) => {
       axios.get('./api/headerList.json')
           .then((res) => {
                const data = res.data;
                const action = changeList(data.data);
                dispatch(action);
           })
           .catch((err) => {
               console.log(err)
           })
    }
};
export const getFooterList = () => {
    return (dispatch) => {
        axios.get('./api/footerList.json')
        .then((res) => {
             const data = res.data.data;
             const action = getFootList(data);
             dispatch(action);
        })
        .catch((err) => {
            console.log(err)
        })
    }
}