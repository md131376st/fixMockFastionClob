import {applyMiddleware, compose, createStore} from "redux";
import {thunk} from "redux-thunk"; // Correctly import the default export
import rootReducer from "../reducers";

const initialState = {};
const middlewares = [thunk];

// Safely use Redux DevTools extension if available
const composeEnhancers =
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
