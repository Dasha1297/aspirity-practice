import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import { projectReducer } from "./reducers/projectReducer";
import boardReducer from "./reducers/boardReducer";
import { ThunkMiddleware } from "redux-thunk";

const rootReducer = combineReducers({
  projectReducer,
  loginReducer,
  boardReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
