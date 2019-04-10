import {createStore} from 'redux';
import listsReducer from '../reducer/index';

const store = createStore(listsReducer);

export default store; 