import { applyMiddleware, combineReducers, createStore } from "redux";
import initialReducer from "./initialReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import searchReducer from "./search/searchReducer";

//Do not change anything and use combine reducer to combine and provide your reducer to the app.

const rootReducer = combineReducers({initialReducer,searchReducer})

export const store = createStore(rootReducer,applyMiddleware(thunk,logger))