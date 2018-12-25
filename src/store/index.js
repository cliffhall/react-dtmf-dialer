import { createStore, combineReducers, applyMiddleware } from 'redux';

// REDUCERS
//import audoReducer from './audio/reducer';

// MIDDLEWARE
//import audioMiddleware from './audio/middleware';

// Root reducer
const rootReducer = combineReducers({
//    audioReducer: audioReducer,
});

// Store
const store = createStore(
    rootReducer,
//    applyMiddleware(audioMiddleware));

export default store;