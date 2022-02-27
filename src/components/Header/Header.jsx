import "./Header.css";
import logo from "../../assets/logo.svg";
import logOut from "../../assets/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  const user = useSelector((state) => state.userReducer);
  const nav = useNavigate();
  return (
    <header>
      <div className='header__container'>
        <NavLink to={"/"}>
          <div class='logo'>
            <img src={logo} alt='Asperiod' />
          </div>
        </NavLink>
        {isAuth ? (
          <div className='user__details'>
            <div className='user__name'>{user.name}</div>
            <div
              class='icon'
              onClick={() => {
                dispatch(logout());
                nav("/");
              }}
            >
              <img src={logOut} alt='Asperiod' />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
