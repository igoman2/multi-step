import { useContext } from "react";
import { Dialog } from "@headlessui/react";
import ModalContext from "../modal-context";

export default function Title(props) {
  const children = props.children;
  const className = props.className;

  const context = useContext(ModalContext);
  const title = context.style.base.title;
  const classes = [...title, className].join(" ");
  return (
    <>
      <Dialog.Title className={classes}>{children}</Dialog.Title>
    </>
  );
}
