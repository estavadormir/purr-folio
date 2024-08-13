import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders without crashing", () => {
    render(<About />);
    const about = screen.getByTestId("about");
    expect(about).toBeInTheDocument();
  });

  it("applies the correct CSS classes", () => {
    render(<About />);
    const about = screen.getByTestId("about");
    expect(about).toHaveClass("z-11");
  });
});
