import Form from "../../Form/Form";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form name={"Вход"}>
      <InputField
        value={login}
        onChange={(e) => setLogin(e.target.value)}
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
