import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router";
import Details from "../pages/Details";

const MockDetails = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    </Provider>
  );
};

describe("Render Details Components", () => {
  test("should render loading message", () => {
    render(<MockDetails />);

    const loadingMessage = screen.getByText("Fetching data...");

    expect(loadingMessage).toBeInTheDocument();
  });
});
