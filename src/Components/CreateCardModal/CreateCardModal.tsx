import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ColorSelector from "../ColorSelector/ColorSelector";
import "./createcardmodal.scss";
import crossbuttonimage from "../../Images/crossbuttonimage.png";

const CreateCardModal: React.FC<{ setOpen: any; setCards: any }> = ({
  setOpen,
  setCards,
}) => {
  const [newcard, setNewCard] = useState({
    card_name: "",
    card_last_four: Math.floor(1000 + Math.random() * 9000).toString(),
    expiry: "03/2026",
    colour: "black",
  });

  const onConfirm = () => {
    if (newcard.card_name) {
      setCards((prev: Array<any>) => {
        return [newcard, ...prev];
      });
      setOpen(false);
    }
  };

  const setNewCardName = (value: string) => {
    setNewCard((prev) => ({ ...prev, card_name: value }));
  };

  const setNewCardColor = (value: string) => {
    setNewCard((prev) => ({ ...prev, colour: value }));
  };

  return (
    <>
      <div className="create-card-modal">
        <img
          src={crossbuttonimage}
          className="cross-button"
          onClick={() => {
            setOpen(false);
          }}
        />
        <h3>Create Virtual Card</h3>
        <Card
          assignedName={newcard.card_name}
          setAssignedName={setNewCardName}
          card_last_four={newcard.card_last_four}
          expiry={newcard.expiry}
          colour={newcard.colour}
        />
        <ColorSelector
          selectedColor={newcard.colour}
          setColor={setNewCardColor}
        />
        <div
          className={`confirm ${newcard.card_name ? "" : "disabled-button"}`}
          onClick={onConfirm}
        >
          Confirm
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
};

export default CreateCardModal;
