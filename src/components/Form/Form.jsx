import "./Form.css";

const Form = ({ name, children, onSubmit }) => {
  return (
    <form className='authorization' onSubmit={onSubmit}>
      <div className='authorization__name'>{name}</div>
      {children}
    </form>
  );
};

export default Form;
