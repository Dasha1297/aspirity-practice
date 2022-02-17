import "./Header.css";
import logo from "../../assets/logo.svg";
import logOut from "../../assets/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  return (
    <header>
      <NavLink to={"/"}>
        <div class='logo'>
          <img src={logo} alt='Asperiod' />
        </div>
      </NavLink>

      {/*<div class='user'>
        <div class='user-wrapper'>
          <span class='user-picture'>
            <img src={avatar} alt='Avatar' class='avatar' />
          </span>
          <span class='user-name'>Daniel Radcliff</span>
        </div>
        <div class='user-detail'>
          <ul>
            <li>My projects</li>
            <li>Log out</li>
          </ul>
        </div>
  </div>*/}
      {isAuth ? (
        <div class='icon' onClick={() => dispatch(logout())}>
          <img src={logOut} alt='Asperiod' />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
