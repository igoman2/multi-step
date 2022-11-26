import ModalContext from "../modal-context";
import { useContext } from "react";

export default function Section(props) {
  const children = props.children;
  const className = props.className;

  useContext(ModalContext);

  return <section className={className}>{children}</section>;
}
