import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);
  let displayStatus;
  let wrapperStatus;
  const node = document.querySelector("#modal-root");

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  display ? (displayStatus = "opened") : (displayStatus = "");
  return ReactDOM.createPortal(
    <div className={`modal-wrapper ${displayStatus}`}>
      <div onClick={close} className={`modal-backdrop ${displayStatus}`} />
      <div className={`modal-box ${displayStatus}`}>{props.children}</div>
    </div>,
    node
  );
});

export default Modal;
