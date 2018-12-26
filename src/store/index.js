import {createStore, applyMiddleware} from 'redux';

import {audioMiddleware} from './audio/middleware';

const store = createStore(
    () => {},
    applyMiddleware(audioMiddleware));

export default store;