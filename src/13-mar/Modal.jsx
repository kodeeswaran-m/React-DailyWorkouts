import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true">
      <div>
        {children}
      </div>

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;