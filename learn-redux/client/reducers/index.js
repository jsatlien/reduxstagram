//big main reducer

//get the package things
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import indivual reducers
import posts from './posts';
import comments from './comments';

//every reducer runs when an action is dispatched
const rootReducer = combineReducers({
                        posts, 
                        comments, 
                        routing: routerReducer
                    });

export default rootReducer;