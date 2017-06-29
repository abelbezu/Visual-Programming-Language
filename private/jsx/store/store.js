import { createStore, combineReducers } from 'redux';
import vlang from './reducers/vlang.js'

var reducers = combineReducers({
    vlang : vlang,
});


export default createStore(reducers);

