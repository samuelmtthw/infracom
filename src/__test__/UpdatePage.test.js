import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router";
import UpdatePage from "../pages/UpdatePage";

const MockUpdatePage = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <UpdatePage />
      </MemoryRouter>
    </Provider>
  );
};

describe("Render UpdatePage Components", () => {
  test("should render loading message", () => {
    render(<MockUpdatePage />);

    const loadingMessage = screen.getByText("Fetching data...");

    expect(loadingMessage).toBeInTheDocument();
  });
});
