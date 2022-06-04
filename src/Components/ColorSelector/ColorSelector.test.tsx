import { render } from "@testing-library/react";
import ColorSelector from "./ColorSelector";

describe("Tests for ColorSelector component", () => {
  test("Selected marker is rendered if correct selectedColor is passed", () => {
    const { container } = render(
      <ColorSelector selectedColor="red" setColor={() => {}} />
    );
    const selectedMarker = container.getElementsByClassName("selected-bullet");

    expect(selectedMarker.length).toBe(1);
  });

  test("Selected marker is not rendered if correct selectedColor is not passed", () => {
    const { container } = render(
      <ColorSelector selectedColor="indigo" setColor={() => {}} />
    );

    const selectedMarker = container.getElementsByClassName("selected-bullet");

    expect(selectedMarker.length).toBe(0);
  });
});
