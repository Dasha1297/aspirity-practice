import "./Form.css";

const Form = ({ name, children }) => {
  return (
    <form className='authorization'>
      <div className='authorization__name'>{name}</div>
      {children}
    </form>
  );
};

export default Form;
