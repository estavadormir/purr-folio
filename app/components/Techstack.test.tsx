import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Techstack } from "./Techstack";

describe("Techstack", () => {
  it("renders without crashing", () => {
    render(<Techstack />);
    const home = screen.getByTestId("techstack");
    expect(home).toBeInTheDocument();
  });

  it("applies the correct CSS classes", () => {
    render(<Techstack />);
    const home = screen.getByTestId("techstack");
    expect(home).toHaveClass("z-13");
  });
});
