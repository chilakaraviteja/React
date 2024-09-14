import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us UI test cases", () => {
  test("Should load Contact US component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact US component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input boxes contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
