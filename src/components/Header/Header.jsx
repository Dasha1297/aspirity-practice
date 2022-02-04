const Header = () => {
  return (
    <header>
      <div class='logo'>
        <a href='/my-projects'>
          <img src='../assets/logo.svg' alt='Asperiod' />
        </a>
      </div>
      <div class='user'>
        <div class='user-wrapper'>
          <span class='user-picture'>
            <img src='../assets/avatar.svg' alt='Avatar' class='avatar' />
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
