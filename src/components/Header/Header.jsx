import "./Header.css";
import logo from "../../assets/logo.svg";
import logOut from "../../assets/logout.svg";
import avatar from "../../assets/avatar.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div class='logo'>
        <img src={logo} alt='Asperiod' />
      </div>
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
      <div class='icon' onClick={() => dispatch(logout())}>
        <img src={logOut} alt='Asperiod' />
      </div>
    </header>
  );
};

export default Header;
