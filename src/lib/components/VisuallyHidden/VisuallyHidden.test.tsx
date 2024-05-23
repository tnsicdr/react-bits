import { render, screen } from "@testing-library/react";
import { VisuallyHidden } from "./VisuallyHidden";

describe("VisuallyHidden", () => {
  it("renders contents", () => {
    render(<VisuallyHidden>Visually Hidden</VisuallyHidden>);

    expect(screen.getByText("Visually Hidden")).toBeInTheDocument();
  });

  it("renders with the right tag", () => {
    render(<VisuallyHidden as="p">Visually Hidden</VisuallyHidden>);

    expect(screen.getByText("Visually Hidden").tagName).toEqual("P");
  });
});
