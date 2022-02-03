import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./reducers/loginReducer";
import { projectReducer } from "./reducers/projectReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ projectReducer, loginReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
