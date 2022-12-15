import React from "react";

function Modal(props) {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>{props.textModal}</h2>
          <button className="close-modal" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
