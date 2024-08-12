import React, { useState } from "react";
import Form from "./Form";
// import './Modal.css'; // You can style the modal as you like

const Modal = ({ show, onClose, item, isEdit, handleSubmitForm }) => {
  return (
    <>
      {show && (
        <div>
          <h2>This is edit form.</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={onClose}
              style={{ padding: "8px", borderRadius: "6px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
          <div className="modal-overlay">
            <div className="modal-content">
              <Form
                data={item}
                isEdit={isEdit}
                handleSubmitForm={handleSubmitForm}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
