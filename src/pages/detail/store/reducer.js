import {fromJS} from 'immutable';
import {GET_ARTICLE_CONTENTS_LIST} from './constants';

const defaultState = fromJS({
    contents: []
});

export default (state = defaultState, action) => {
    switch(action.type){
        case GET_ARTICLE_CONTENTS_LIST :
            return state.set('contents', action.contents);
        default :
            return state;
    }
}