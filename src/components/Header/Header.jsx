import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
const Header = () => {
  return (
    <header>
      <div class='logo'>
        <img src={logo} alt='Asperiod' />
      </div>
      <div class='user'>
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
      </div>
    </header>
  );
};

export default Header;
