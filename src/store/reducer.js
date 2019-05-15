//import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as articlesReducer} from '../pages/detail/store';
import { reducer as loginReducer} from '../pages/signIn/store';


const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: articlesReducer,
    login: loginReducer
});

export default reducer;