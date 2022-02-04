import React from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import Registration from "./components/Authorization/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
import { useSelector } from "react-redux";
import Projects from "./components/Projects/Projects";
import ProjectsSelector from "./components/ProjectsSelector/ProjectsSelector";

function App() {
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  console.log(isAuth);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
