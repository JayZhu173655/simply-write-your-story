import axios from 'axios';
import {fromJS} from 'immutable';
import {GET_ARTICLE_CONTENTS_LIST} from './constants';

const getContentDetail = (data) => ({
    type: GET_ARTICLE_CONTENTS_LIST,
    contents: fromJS(data)
});
export const getContentList = () => {
    return (dispatch) => {
        axios.get('./api/article190512.json')
            .then((res) => {
                const data = res.data.contents;
                dispatch(getContentDetail(data));
            })
            .catch((err) => {
                console.log(err);
            })
    }
};