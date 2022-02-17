import React from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
import { useDispatch, useSelector } from "react-redux";

import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Boards from "./components/Boards/Boards";
import RegistrationContainer from "./components/Authorization/Registration/RegistrationContainer";
import TokenService from "./services/TokenService";
import ProjectUsers from "./components/ProjectUsers/ProjectUsers";


function App() {
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  return (
    <React.Fragment>
      <HashRouter>
        <Header />
        {!isAuth && (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<RegistrationContainer />} />
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
