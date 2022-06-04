import React from "react";
import { cardColors } from "../../Constants/cardColors";
import "./colorselector.scss";

const ColorSelector: React.FC<{ selectedColor: string; setColor: any }> = ({
  selectedColor,
  setColor,
}) => {
  return (
    <div className="color-selector-container">
      {Object.keys(cardColors).map((colorName: string) => (
        <span
          key={colorName}
          style={{ backgroundColor: `${cardColors[colorName]}` }}
          className={`colorbullet ${
            selectedColor == cardColors[colorName] ? "selected-bullet" : ""
          }`}
          onClick={() => {
            setColor(cardColors[colorName]);
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
