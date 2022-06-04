import CreateCardModal from "./CreateCardModal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tests for Card component", () => {
  test("Renders exactly 1 card", () => {
    const { container } = render(
      <CreateCardModal setOpen={() => {}} setCards={() => {}} />
    );
    const cardElements = container.getElementsByClassName("card");

    expect(cardElements.length).toBe(1);
  });

  test("Renders an editable card", () => {
    const { container } = render(
      <CreateCardModal setOpen={() => {}} setCards={() => {}} />
    );
    const nameInputElement = container.getElementsByTagName("input");
    expect(nameInputElement.length).toBe(1);
  });
});
