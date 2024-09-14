import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../components/mock/resCardMockData.json";
import "@testing-library/jest-dom";

describe("Restaurant card component ", () => {
  it("should render Restaurant card ", () => {
    render(<RestaurantCard restList={MOCK_DATA} />);

    const name = screen.getByText(/Five Star Chicken/);

    expect(name).toBeInTheDocument();
  });
});
