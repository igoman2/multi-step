import { Dialog } from "@headlessui/react";
import ModalContext from "../modal-context";
import { useContext } from "react";

export default function Copy(props) {
  const children = props.children;
  const className = props.className;

  const context = useContext(ModalContext);
  const copy = context.style.base.copy;
  const classes = [...copy, className].join(" ");
  return (
    <>
      <Dialog.Description className={classes}>{children}</Dialog.Description>
    </>
  );
}
