import rootReducer from "../reducers";
import {applyMiddleware, compose, createStore} from "redux";
import {thunk} from 'redux-thunk'; // Correctly import the named export


const initialState = {};
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;