import "./Button.css";

const Button = ({
  text,
  color = "white",
  link,
  type = "button",
  width,
  onClick,
  onSubmit,
  disabled,
}) => {
  if (type === "button") {
    return <button>{text}</button>;
  } else if (type === "submit") {
    return (
      <button
        disabled={!!disabled}
        onSubmit={onSubmit}
        style={{ background: color }}
        className='button'
      >
        {text}
      </button>
    );
  }
};

export default Button;