import "./Form.css";
import classNames from "classnames";

const Form = ({ name, children, onSubmit, extraClass }) => {
  return (
    <form className={classNames("form", extraClass)} onSubmit={onSubmit}>
      <div className='form__name'>{name}</div>
      {children}
    </form>
  );
};

export default Form;
