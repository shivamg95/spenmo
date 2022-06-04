import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardCarousel from "./CardCarousel";

describe("Tests for CardCarousel component", () => {
  test("Renders modal when create card button is clicked", () => {
    const { container } = render(
      <CardCarousel cards={[]} setCards={() => {}} />
    );
    const createButtonElement =
      container.getElementsByClassName("create-card-button");
    userEvent.click(createButtonElement[0]);

    const outputElement = screen.getByText("Create Virtual Card", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("Renders create/activate card box", () => {
    render(<CardCarousel cards={[]} setCards={() => {}} />);

    const outputElement = screen.getByText("Create/Activate Cards", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("Renders Correct number of cards", () => {
    const { container } = render(
      <CardCarousel cards={[{}, {}, {}]} setCards={() => {}} />
    );
    const cardElements = container.getElementsByClassName("card");

    expect(cardElements.length).toBe(3);
  });
});
