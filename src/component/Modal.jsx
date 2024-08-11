import React, { useState } from 'react';
import Form from './Form';
// import './Modal.css'; // You can style the modal as you like

const Modal = ({ show, onClose, item, isEdit }) => {
  return (
    <>    
    
    {show && (
      <div>
      <h2>This is edit form.</h2>
    <button onClick={onClose} >Close</button>
    <div className="modal-overlay">
      <div className="modal-content">
      <Form  data={item}/>
    </div>
    </div>
    </div>
    )}
  </>
  );

};

export default Modal;
