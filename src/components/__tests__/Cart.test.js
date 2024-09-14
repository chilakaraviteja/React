import { act } from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import MOCK_MENU from "../../components/mock/resMenu.json";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU);
    },
  });
});

describe("Cart flow", () => {
  it("should Load restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const recommendedBtn = screen.getByText("Biryanis ( Single Serves ) (2)");
    expect(recommendedBtn).toBeInTheDocument();
    fireEvent.click(recommendedBtn);
    expect(
      screen.getByText("Chicken Fry Biryani (single Serve)")
    ).toBeInTheDocument();
  });
});
