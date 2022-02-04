import { useState } from "react";
import { registration } from "../../../redux/actions/loginActions";
import Form from "../../Form/Form";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);

  const passwordHandler = () => {
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
      setValidatePassword(true);
    }
  };
  const navigate = useNavigate();
  const auth = (event) => {
    event.preventDefault();
    const response = registration(login, password, name);
    if (response) {
      alert("Вы успешно зарегистрированы");
      navigate("/");
    } else {
      alert("Что-то пошло не так, попробуйте еще раз");
    }
  };

  return (
    <Form name={"Регистрация"} onSubmit={auth}>
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
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"введите пароль"}
        type={"password"}
        minLength={8}
        width={350}
        onBlur={() => passwordHandler()}
      />
      <Button
        type='submit'
        text={"Зарегистрироваться"}
        disabled={
          login === "" || name === "" || password === "" || !validatePassword
        }
      />
    </Form>
  );
};

export default Registration;
