import React, { useState } from "react";
import CardCarousel from "./Components/CardCarousel/CardCarousel";

const initialCards = {
  card_name: "Superhuman",
  card_last_four: "5139",
  expiry: "03/2020",
  colour: "black",
};

function App() {
  const [cards, setCards] = useState([initialCards]);
  return (
    <div className="App">
      <CardCarousel cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
