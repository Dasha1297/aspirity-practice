import Form from "../../Form/Form";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/loginActions";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logIn = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    navigate("/");
  };

  return (
    <Form name={"Вход"} onSubmit={logIn} extraClass={"form__authorization "}>
      <InputField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"введите email"}
        type={"email"}
        width={350}
      />
      <InputField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"введите пароль"}
        type={"password"}
        minLength={8}
        width={350}
      />
      <Button
        type='submit'
        text={"Войти"}
        disabled={login === "" || password === ""}
      />
    </Form>
  );
};

export default Login;
