// immutable库是一个生成不可变的方法库
import {fromJS} from 'immutable';
import {CHANGE_AUTHORS, CHANGE_HOME_DATA, CHANGE_PAGE, TOGGLE_TOP_SHOW,GET_MORE_ARTICLE_LIST} from './constants';

const defaultState  =  fromJS({
    topicList: [],
    articleList: [],
    recommend:[],
    users: [],
    page: 1,
    totalPage: 0,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_AUTHORS :
            return state.merge({
                users: action.users,
                totalPage: action.totalPage
            });
        case CHANGE_PAGE :
            return state.set('page', action.page);
        case TOGGLE_TOP_SHOW :
            return state.set('showScroll', action.show);
        case CHANGE_HOME_DATA :
            return state.merge({
                articleList: action.articleList,
                recommend: action.recommend,
                topicList: action.topicList
            });
        case GET_MORE_ARTICLE_LIST :
        console.log(state.get("articleList"));
            return state.set("articleList",  state.get("articleList").concat(action.articleList));
        default:
            return state;
    }
};
