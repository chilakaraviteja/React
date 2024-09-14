import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../components/mock/resList.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Component", () => {
  it("should render search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const input = screen.getByRole("button", { name: "Search" });

    expect(input).toBeInTheDocument();
  });
  it("should filter restaurant on search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBefore = screen.getAllByTestId("resCard");
    expect(cardsBefore.length).toBe(10);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
  });
  it("should filter top rated restaurants on click", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBefore = screen.getAllByTestId("resCard");
    expect(cardsBefore.length).toBe(10);

    fireEvent.click(screen.getByTestId("topRated"));
    const cardsAfter = screen.getAllByTestId("resCard");

    expect(cardsAfter.length).toBe(1);
  });
});
