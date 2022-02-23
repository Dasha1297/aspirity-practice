import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import { projectReducer } from "./reducers/projectReducer";
import { boardReducer } from "./reducers/boardReducer";
import { ThunkMiddleware } from "redux-thunk";
import TokenService from "../services/TokenService";
import userReducer from "./reducers/userReducer";
import { usersById } from "./actions/usersActions";
import tasksReducer from "./reducers/tasksReducer";

const rootReducer = combineReducers({
  projectReducer,
  loginReducer,
  boardReducer,
  userReducer,
  tasksReducer,
});

const store = () => {

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (TokenService.getUser()) {
    store.dispatch(usersById(TokenService.getUserId()));
  }

  return store;
};

export default store;
