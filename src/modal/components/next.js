import ModalContext from "../modal-context";
import { useContext } from "react";

export const useNext = () => {};

export default function Next(props) {
  const children = props.children;
  const className = props.className;

  const context = useContext(ModalContext);
  const nextStyle = context.style.base.next;
  const classes = [...nextStyle, className].join(" ");

  const onClick = () => {
    const next = context.next;
    const nextKey = props?.nextKey || parseInt(context.currentScreenID) + 1;
    console.log(nextKey);
    const [currentScreenID, currentScreen] = next(nextKey, context);
    context.dispatch({
      type: "NEXT",
      data: { currentScreenID, currentScreen }
    });
  };

  return (
    <>
      <button className={classes} onClick={() => onClick()}>
        {children}
      </button>
    </>
  );
}
