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
              <Modal.Close> X </Modal.Close>
              <Modal.Title> Listing NFT</Modal.Title>
            </Modal.Header>

            <Modal.Section className="focus:outline-none p-12 space-y-8 flex-1 flex flex-col items-center justify-center">
              <Modal.Section className="space-y-1">
                <Modal.Copy>We're preparing to List.</Modal.Copy>
                <Modal.Copy>
                  We'll ask you to confirm with your preferred wallet shortly.
                </Modal.Copy>
              </Modal.Section>
            </Modal.Section>

            <Modal.Section className="p-4">
              <Modal.Section className="flex items-center justify-between">
                <Modal.Close>Cancel</Modal.Close>
                <Modal.Next>List on Showtime</Modal.Next>
              </Modal.Section>
            </Modal.Section>
          </Modal.Screen>

          {/* ignores elements outside of screen! */}
          <div style={{ margin: "1rem", border: "solid 1px black" }} />

          <Modal.Screen screen="2">
            <Modal.Header>
              <Modal.Title> Other Listing NFT </Modal.Title>
              <Modal.Close> X </Modal.Close>
            </Modal.Header>

            <Modal.Section className="focus:outline-none p-12 space-y-8 flex-1 flex flex-col items-center justify-center">
              <Modal.Section className="space-y-1">
                <Modal.Copy>We're preparing for List More.</Modal.Copy>
                <Modal.Copy>
                  We'll ask you to confirm with your preferred wallet shortly.
                </Modal.Copy>
              </Modal.Section>
            </Modal.Section>

            <Modal.Section className="p-4">
              <Modal.Section className="flex items-center justify-between">
                <Modal.Close>Cancel</Modal.Close>
                <Modal.Next>Sell on Showtime</Modal.Next>
              </Modal.Section>
            </Modal.Section>
          </Modal.Screen>

          <Modal.Screen screen="3">
            <Modal.Header>
              <Modal.Close> X </Modal.Close>
              <Modal.Title> Other Some List NFT </Modal.Title>
            </Modal.Header>

            <Modal.Section className="focus:outline-none p-12 space-y-8 flex-1 flex flex-col items-center justify-center">
              <Modal.Section className="space-y-1">
                {/* we can just make it P tag then */}
                <Modal.Copy>We're preparing the sale.</Modal.Copy>
                <Modal.Copy>
                  We'll ask you to confirm with your preferred wallet shortly.
                </Modal.Copy>
              </Modal.Section>
            </Modal.Section>

            <Modal.Section className="p-4">
              <Modal.Section className="flex items-center justify-between">
                <Modal.Close>Cancel</Modal.Close>
                <Modal.Next nextKey="error">Other on Showtime</Modal.Next>
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
                <Modal.Next>Exit!</Modal.Next>
              </Modal.Section>
            </Modal.Section>
          </Modal.Screen>
        </Modal>
      ) : null}
    </>
  );
}
