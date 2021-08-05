import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (reducers, middlewares) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, composeWithDevTools(enhancer));
};