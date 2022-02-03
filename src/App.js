import React from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import Registration from "./components/Authorization/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
