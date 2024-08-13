import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contacts } from "./Contacts";

describe("Contact", () => {
  it("renders without crashing", () => {
    render(<Contacts />);
    const Contact = screen.getByTestId("Contact");
    expect(Contact).toBeInTheDocument();
  });

  it("applies the correct CSS classes", () => {
    render(<Contacts />);
    const Contact = screen.getByTestId("Contact");
    expect(Contact).toHaveClass("z-12");
  });
});
