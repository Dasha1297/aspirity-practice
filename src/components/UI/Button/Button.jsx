import "./Button.css";
import { NavLink } from "react-router-dom";

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
  console.log(width);
  if (type === "button") {
    return link === "#" ? (
      <button
        disabled={!!disabled}
        onSubmit={onSubmit}
        style={{ background: color, width: width + "px" }}
        className='button'
      >
        {text}
      </button>
    ) : (
      <NavLink to={link}>
        <button
          disabled={!!disabled}
          onSubmit={onSubmit}
          style={{ background: color, width: width + "px" }}
          className='button'
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
        style={{ background: color, width: width + "px" }}
        className='button'
      >
        {text}
      </button>
    );
  }
};

export default Button;
