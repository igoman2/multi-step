import Modal from "./modal";

export default function Listing(props) {
  const open = props.open;
  const onClose = props.onClose;

  return (
    <>
      {open ? (
        <Modal initial="1" open={open} onClose={onClose}>
          <Modal.Screen screen="1">
            <Modal.Header>
              {/* FLIP THESE IT JUST WORKS */}
              <Modal.Close> X </Modal.Close>
              <Modal.Title> TITLE </Modal.Title>
            </Modal.Header>

            <Modal.Section className="focus:outline-none p-12 space-y-8 flex-1 flex flex-col items-center justify-center">
              <Modal.Copy>Hello World</Modal.Copy>
              <Modal.Next>Visit Next</Modal.Next>
            </Modal.Section>
          </Modal.Screen>

          <Modal.Screen screen="2">
            <Modal.Header>
              <Modal.Title> Other Screen (breadcrumbs) </Modal.Title>
            </Modal.Header>

            <Modal.Section className="focus:outline-none p-12 space-y-8 flex-1 flex flex-col items-center justify-center">
              <Modal.Section className="space-y-1">
                <Modal.Next nextKey="1">Back</Modal.Next>
                <Modal.Next nextKey="error">Go To Error</Modal.Next>
              </Modal.Section>
            </Modal.Section>
          </Modal.Screen>

          <Modal.Screen screen="error">
            <Modal.Header>
              <Modal.Title> some name error! </Modal.Title>
              <Modal.Close> X </Modal.Close>
            </Modal.Header>

            <Modal.Section className="focus:outline-none p-12 space-y-8 flex-1 flex flex-col items-center justify-center">
              <Modal.Section className="space-y-1">
                <Modal.Copy>Only show when triggered</Modal.Copy>
              </Modal.Section>
            </Modal.Section>

            <Modal.Section className="p-4">
              <Modal.Section className="flex items-center justify-between">
                <Modal.Close>Cancel</Modal.Close>
                <Modal.Close>Exit!</Modal.Close>
              </Modal.Section>
            </Modal.Section>
          </Modal.Screen>
        </Modal>
      ) : null}
    </>
  );
}
