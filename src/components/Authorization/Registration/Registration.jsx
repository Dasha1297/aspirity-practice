import { useState } from "react";
import "./Registration.css";
import { registration } from "../../../redux/actions/loginActions";
import Form from "../../Form/Form";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const dispatch = useDispatch();

  const passwordHandler = (password) => {
    setPassword(password);

    if (
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(
        password
      )
    ) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  };

  const navigate = useNavigate();
  const auth = (event) => {
    event.preventDefault();
    const response = dispatch(registration(login, password, name));
    if (response) {
      alert("Вы успешно зарегистрированы");
      navigate("/");
    } else {
      alert("Что-то пошло не так, попробуйте еще раз");
    }
  };

  return (
    <Form
      name={"Регистрация"}
      onSubmit={auth}
      extraClass={"form__authorization "}
    >
      <InputField
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder={"введите email"}
        type={"email"}
        width={350}
      />
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"введите имя"}
        type={"text"}
        width={350}
      />
      <InputField
        value={password}
        onChange={(e) => passwordHandler(e.target.value)}
        placeholder={"введите пароль"}
        type={"password"}
        minLength={8}
        width={350}
      />
      <div className='password__requirements'>
        Пароль должен содержать:
        <br />- минимум 8 символов;
        <br /> - заглавные и строчные буквы;
        <br /> - специальные символы;
        <br /> - цифры
      </div>
      <Button
        type='submit'
        text={"Зарегистрироваться"}
        disabled={login === "" || name === "" || !validatePassword}
      />
    </Form>
  );
};

export default Registration;
