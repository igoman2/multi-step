import { useEffect, useReducer, Children } from "react";
import { Dialog } from "@headlessui/react";
import ModalContext from "./modal-context";
import reducer, { modalState } from "./modal-state";
import Section from "./components/section";
import Header from "./components/header";
import Screen from "./components/screen";
import Copy from "./components/copy";
import Next, { useNext } from "./components/next";
import Close from "./components/close";
import Title from "./components/title";

export default function Modal(props) {
  const [state, dispatch] = useReducer(reducer, {
    ...modalState,
    currentScreenID: props.initial || 1,
    onClose: props.onClose
  });
  const currentScreenID = state.currentScreenID;
  const Screen = state.currentScreen;
  const open = props.open;
  const onClose = props.onClose;
  const children = props.children;
  useEffect(() => {
    // TODO: Hack proof of concept implementation
    console.log("currentScreenID", currentScreenID);
    const [currentScreen] = Children.toArray(children).filter(
      (child) => child?.props?.screen === currentScreenID.toString()
    );

    dispatch({
      type: "SETSCREENS",
      data: { currentScreens: Children.toArray(children) }
    });
    dispatch({ type: "SETSCREEN", data: { currentScreenID, currentScreen } });
  }, [children, currentScreenID]);

  return (
    <ModalContext.Provider value={{ ...state, dispatch }}>
      <Dialog open={open} onClose={onClose}>
        <Dialog.Overlay />
        <Modal.Section className="min-h-Screen text-center">
          <Modal.Section className="inline-block align-bottom rounded-t-3xl sm:rounded-b-3xl text-left overflow-hidden transform transition-all sm:align-middle bg-white dark:bg-black shadow-xl sm:max-w-lg w-full">
            {Screen}
          </Modal.Section>
        </Modal.Section>
      </Dialog>
    </ModalContext.Provider>
  );
}

Modal.Screen = Screen;
Modal.Section = Section;
Modal.Header = Header;
Modal.Title = Title;
Modal.Copy = Copy;
Modal.Close = Close;
Modal.Next = Next;
Modal.useNext = useNext;
