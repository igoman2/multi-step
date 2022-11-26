import ModalContext from "../modal-context";
import { useContext } from "react";

export default function Screen(props) {
  const children = props.children;

  useContext(ModalContext);

  return <section className="min-h-[344px]"> {children} </section>;
}
