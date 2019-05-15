//import * as constants.js from './constants.js';
import {constants} from "./"
// immutable库是一个生成不可变的方法库
import {fromJS} from 'immutable';

const defaultState  =  fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 0,
    footList:[]
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS :
            return state.set('focused', true);
        case constants.SEARCH_BLUR :
            return state.set('focused', false);
        case constants.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
            // 如果需要改变的数据很多建议用merge
            //return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER :
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE :
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE :
            return state.set('page', action.page);
        case constants.GET_FOOTER_LIST :
            return state.set('footList', action.footerList)    
        default :
            return state;
    }
    /*
    // 大量的if条件语句用switch语句替换 switch里面有return就不用breakle
    if(action.type === constants.js.SEARCH_FOCUS){
        // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true)
    }
    if(action.type === constants.js.SEARCH_BLUR){
        return state.set('focused', false)
    }
    if(action.type === constants.js.CHANGE_LIST){
        return state.set('list', action.data)
    }
    return state;
    */
};