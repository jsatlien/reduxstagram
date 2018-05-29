import { createStore, compose } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//root reducer
import rootReducer from './reducers/index';

//data
import comments from './data/comments';
import posts from './data/posts';

//object for default data
const defaultState = {
    posts,
    comments
}

//create store
const store = createStore(rootReducer, defaultState);

//history (pass in store)
export const history = syncHistoryWithStore(browserHistory, store);

export default store;