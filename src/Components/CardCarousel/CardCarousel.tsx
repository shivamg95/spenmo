import React, { useState, useRef, useEffect } from "react";
import Card from "../Card/Card";
import CreateCardModal from "../CreateCardModal/CreateCardModal";
import "./cardcarousel.scss";

const CardCarousel: React.FC<{ cards: Array<any>; setCards: any }> = ({
  cards,
  setCards,
}) => {
  const [open, setOpen] = useState(false);
  const scrollableElement: any = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);

  const handleForward = () => {
    if (
      scrollableElement.current.scrollWidth !=
      scrollableElement.current.scrollLeft +
        scrollableElement.current.offsetWidth
    ) {
      scrollableElement.current.scrollLeft =
        scrollableElement.current.scrollLeft + 250;
      setCurrentPos(scrollableElement.current.scrollLeft);
    }
  };

  const handleBack = () => {
    if (scrollableElement.current.scrollLeft != 0) {
      scrollableElement.current.scrollLeft =
        scrollableElement.current.scrollLeft - 250;
      setCurrentPos(scrollableElement.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (currentPos == 0) setIsAtStart(true);
    else setIsAtStart(false);

    if (
      scrollableElement.current.scrollWidth <=
      currentPos + scrollableElement.current.offsetWidth
    )
      setIsAtEnd(true);
    else setIsAtEnd(false);
  }, [currentPos, cards]);

  return (
    <>
      <div className="carousel-container">
        <div className="create-card">
          <div
            className="create-card-button"
            onClick={() => {
              setOpen(true);
            }}
          >
            +
          </div>
          Create/Activate Cards
        </div>

        {!isAtStart && (
          <button className="scroller start" onClick={handleBack}>
            {"<"}
          </button>
        )}
        <div className="cards-container" ref={scrollableElement}>
          {cards.map((item) => (
            <Card
              card_name={item.card_name}
              card_last_four={item.card_last_four}
              expiry={item.expiry}
              colour={item.colour}
              key={item.card_last_four}
            />
          ))}
        </div>
        {!isAtEnd && (
          <button className="scroller end" onClick={handleForward}>
            {">"}
          </button>
        )}
      </div>
      {open && <CreateCardModal setOpen={setOpen} setCards={setCards} />}
    </>
  );
};

export default CardCarousel;
