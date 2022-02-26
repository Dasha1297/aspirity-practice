import "./Registration.css";
import Form from "../../Form/Form";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

const Registration = ({
  auth,
  emailHandler,
  passwordHandler,
  login,
  password,
  name,
  setName,
  validatePassword,
  validateEmail,
  errors,
}) => {
  return (
    <Form
      name={"Регистрация"}
      onSubmit={auth}
      extraClass={"form__authorization "}
    >
      {name.length >= 128 ? (
        <ErrorMessage
          message={"Имя не должно превышать 128 символов"}
        ></ErrorMessage>
      ) : null}

      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"введите имя"}
        type={"text"}
        width={350}
      />

      <InputField
        value={login}
        onChange={(e) => emailHandler(e.target.value)}
        placeholder={"введите email"}
        type={"email"}
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
      <ul className='password__requirements'>
        Пароль должен содержать:
        <li>минимум 8 символов;</li>
        <li>заглавные и строчные буквы;</li>
        <li>специальные символы{"(!@#$%^&*.,-_=+?<>~)"};</li>
        <li>цифры</li>
      </ul>
      {errors !== null ? <ErrorMessage message={errors}></ErrorMessage> : null}

      <Button
        type='submit'
        text={"Зарегистрироваться"}
        disabled={
          name.toString().trim().length === 0 ||
          !validateEmail ||
          !validatePassword
        }
      />
    </Form>
  );
};

export default Registration;
