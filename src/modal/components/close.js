import ModalContext from "../modal-context";
import { useContext } from "react";

export default function Close(props) {
  const children = props.children;
  const className = props.className;

  const context = useContext(ModalContext);
  const close = context.style.base.close;
  const classes = [...close, className].join(" ");
  const onClose = context.onClose;

  return (
    <>
      <button className={classes} onClick={() => onClose(false)}>
        {children}
      </button>
    </>
  );
}
