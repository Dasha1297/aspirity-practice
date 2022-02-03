import Button from "../../UI/Button/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <div className='home__logo'></div>
      <div className='home__buttons'>
        <Button text={"Войти"} link='/login' width={"175"} />
        <Button text={"Зарегестрироваться"} link='/signup' width={"175"} />
      </div>
    </div>
  );
};

export default Home;
