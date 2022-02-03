import React from "react";
import "./App.css";
import Login from "./components/Authorization/LogIn/Login";
import Registration from "./components/Authorization/Registration/Registration";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Authorization/Home/Home";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
