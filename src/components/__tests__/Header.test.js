import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";

describe("Header Test Cases", () => {
  it("should load header with loggin button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });

    expect(loginBtn).toBeInTheDocument();
  });
  it("should show cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/🛒/);
    expect(cartItems).toBeInTheDocument();
  });
  it("should change login to logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
});
