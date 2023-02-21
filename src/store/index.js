import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {fetchData} from './reducers/data';

export const store = createStore(fetchData, applyMiddleware(thunk));
