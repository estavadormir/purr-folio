import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Initial } from "./Initial";

describe("Initial", () => {
  it("renders without crashing", () => {
    render(<Initial />);
    const home = screen.getByTestId("home");
    expect(home).toBeInTheDocument();
  });

  it("applies the correct CSS classes", () => {
    render(<Initial />);
    const home = screen.getByTestId("home");
    expect(home).toHaveClass("z-9");
  });
});
