import Registration from "./Registration";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registration } from "../../../redux/actions/loginActions";
import { useState } from "react";
import { SUCCESS } from "../../../redux/consts";

const RegistrationContainer = () => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const errors = useSelector((state) => state.loginReducer.error);

  const dispatch = useDispatch();

  const passwordHandler = (password) => {
    setPassword(password);

    if (
      /(?=.*[0-9])(?=.*[!@#$%^&*.,-_=+?<>~])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*.,-_=+?<>~]{8,}/.test(
        password
      )
    ) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  };

  const emailHandler = (email) => {
    setLogin(email);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidateEmail(true);
    }
  };

  const navigate = useNavigate();

  const auth = (event) => {
    event.preventDefault();
    const response = dispatch(registration(login, password, name));
    response.then((res) => {
      if (res === SUCCESS) {
        navigate("/");
      }
    });
  };
  return (
    <Registration
      auth={auth}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
      name={name}
      setName={setName}
      validatePassword={validatePassword}
      validateEmail={validateEmail}
      errors={errors}
    />
  );
};

export default RegistrationContainer;
