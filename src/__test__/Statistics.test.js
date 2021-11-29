import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router";
import Statistics from "../pages/Statistics";

const MockStatistics = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Statistics />
      </MemoryRouter>
    </Provider>
  );
};

describe("Render Statistics Components", () => {
  test("should render loading message", () => {
    render(<MockStatistics />);

    const loadingMessage = screen.getByText("Fetching data...");

    expect(loadingMessage).toBeInTheDocument();
  });
});
