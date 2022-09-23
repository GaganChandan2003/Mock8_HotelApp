import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
 import { adminreducer } from "./Admin/reducer";
const rootReducer=combineReducers({
    admindata:adminreducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));