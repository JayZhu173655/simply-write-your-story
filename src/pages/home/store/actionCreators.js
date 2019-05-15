import axios from 'axios';
import {fromJS} from 'immutable';
import {CHANGE_AUTHORS, CHANGE_PAGE, TOGGLE_TOP_SHOW, CHANGE_HOME_DATA,GET_MORE_ARTICLE_LIST} from './constants';

const changeAuthors = (data) => ({
    type: CHANGE_AUTHORS,
    users: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
});

const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    articleList:  fromJS(result.articleList),
    recommend: fromJS(result.recommendList),
    topicList: fromJS(result.topicList)
});
const changeMoreArticleList = (data) => ({
    type: GET_MORE_ARTICLE_LIST,
    articleList: fromJS(data)
});
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
});

export const getAuthors = () => {
    return (dispatch) => {
        axios.get('./api/authors.json')
            .then((res) => {
                const data = res.data;
                const action = changeAuthors(data.users);
                dispatch(action);
            })
            .catch((err) => {
                console.log(err);
            })
    }
};
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('./api/home.json')
            .then((res) => {
                const result = res.data.data;
                const action = changeHomeData(result);
                dispatch(action);
            })
            .catch((err) => {
                console.log(err);
            })
    }
};
export const toggleTopShow = (show) => ({
    type: TOGGLE_TOP_SHOW,
    show
});
export const getMoreArticleList = () =>{
    return (dispatch) => {
        axios.get('./api/homeList.json')
            .then((res) => {
                const data = res.data.data;
                dispatch(changeMoreArticleList(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
};