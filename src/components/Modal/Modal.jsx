import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive, children, name }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal__header'>
          {name ? <div>{name}</div> : null}
          <div onClick={() => setActive(false)} className='modal__close'></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
