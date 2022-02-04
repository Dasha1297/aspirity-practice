import "./Button.css";

import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Button = ({
  text,
  color = "white",
  link = "#",
  type = "button",
  width,
  onClick,
  onSubmit,
  disabled,
}) => {
  if (type === "button") {
    return link === "#" ? (
      <button
        disabled={!!disabled}
        onClick={onClick}
        style={{ width: width + "px" }}
        className={classNames({
          button: true,
          button__blue: color === "blue",
        })}
      >
        {text}
      </button>
    ) : (
      <NavLink to={link}>
        <button
          disabled={!!disabled}
          onClick={onClick}
          style={{ width: width + "px" }}
          className={classNames({
            button: true,
            button__blue: color === "blue",
          })}
        >
          {text}
        </button>
      </NavLink>
    );
  } else if (type === "submit") {
    return (
      <button
        disabled={!!disabled}
        onSubmit={onSubmit}
        style={{ width: width + "px" }}
        className={classNames({
          button: true,
          button__blue: color === "blue",
        })}
      >
        {text}
      </button>
    );
  }
};

export default Button;
