import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import storeReducer from "./redusers/storeReducer";
import userReducer from "./redusers/userReducer";
import thunk from "redux-thunk";


const reducers = combineReducers( {
    storeReducer: storeReducer,
    userReducer: userReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store