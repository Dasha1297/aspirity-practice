import React from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import Registration from "./components/Authorization/Registration/Registration";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
import { useDispatch, useSelector } from "react-redux";

import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";

function App() {
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  console.log(isAuth);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
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
          </Routes>
        )}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
