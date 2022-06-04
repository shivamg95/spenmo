import Card from "./Card";
import { render } from "@testing-library/react";

describe("Tests for CardCarousel component", () => {
  test("renders name input element in case card_name prop is not passed", () => {
    const { container } = render(<Card />);
    const nameInputElement = container.getElementsByTagName("input");
    expect(nameInputElement.length).toBe(1);
  });

  test("Does not renders name input element in case card_name prop is passed", () => {
    const { container } = render(<Card card_name="Card 1" />);
    const nameInputElement = container.getElementsByTagName("input");
    expect(nameInputElement.length).toBe(0);
  });
});
