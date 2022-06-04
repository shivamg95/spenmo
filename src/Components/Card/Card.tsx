import React from "react";
import "./card.scss";
import spenmologo from "../../Images/spenmologo.png";
import mastercardlogo from "../../Images/mastercardlogo.png";

interface CardType {
  card_name?: string;
  card_last_four?: string;
  expiry?: string;
  colour?: string;
  setAssignedName?: any;
  assignedName?: string;
}

const Card = ({
  card_name,
  card_last_four,
  expiry,
  colour,
  setAssignedName,
  assignedName,
}: CardType) => {
  const setName = (e: any) => {
    setAssignedName(e.target.value);
  };
  return (
    <div
      className="card"
      style={{
        backgroundColor: `${colour}`,
      }}
    >
      <img src={spenmologo} className="logo" />
      {card_name ? (
        <span>{card_name}</span>
      ) : (
        <input
          type="text"
          placeholder="Name"
          onChange={setName}
          value={assignedName}
        />
      )}
      <span>**** **** **** {card_last_four}</span>
      <span className="expiry">
        Expiry:
        <br />
        {expiry} <img src={mastercardlogo} className="masterlogo" />
      </span>

      {/* <span>{colour}</span> */}
    </div>
  );
};

export default Card;
