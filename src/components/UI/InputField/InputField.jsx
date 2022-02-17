import classNames from "classnames";
import "./InputField.css";

const InputField = ({
  onChange,
  value,
  placeholder,
  extraClass,
  type,
  width,
  height,
  minLength = 1,
  maxlength = 128,
  onBlur,
}) => {
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      maxLength={maxlength}
      className={classNames("inputField", extraClass)}
      style={{ width: width + "px", height: height + "px" }}
    ></input>
  );
};

export default InputField;
