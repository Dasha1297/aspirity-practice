import React from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import Registration from "./components/Authorization/Registration/Registration";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
import { useDispatch, useSelector } from "react-redux";

import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Boards from "./components/Boards/Boards";
import ProjectUsers from "./components/Projects/ProjectUsers/ProjectUsers";

function App() {
  const isAuth = useSelector((state) => state.loginReducer.isAuth);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header />
      <HashRouter>
        {!isAuth && (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        )}
        {isAuth && (
          <Routes>
            <Route path='/' element={<Projects />} />
            <Route path='/projectusers' element={<ProjectUsers />} />
            <Route path='/boards' element={<Boards />} />
          </Routes>
        )}
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
