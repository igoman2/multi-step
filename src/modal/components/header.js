import ModalContext from "../modal-context";
import { useContext } from "react";

export default function Header(props) {
  const children = props.children;
  const className = props.className;

  const context = useContext(ModalContext);
  const header = context.style.base.header;
  const classes = [...header, className].join(" ");
  return <section className={classes}>{children}</section>;
}
