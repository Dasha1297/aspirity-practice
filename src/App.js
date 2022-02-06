import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import Registration from "./components/Authorization/Registration/Registration";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions/loginActions";
import Projects from "./components/Projects/Projects";
import ProjectsSelector from "./components/ProjectsSelector/ProjectsSelector";

function App() {
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  console.log(isAuth);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
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
            <Route path='/' element={<h1>HELLO</h1>} />
          </Routes>
        )}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
