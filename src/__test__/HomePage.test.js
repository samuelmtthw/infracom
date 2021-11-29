import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router";
import HomePage from "../pages/HomePage";
import { useEffect } from "react";

const MockHomePage = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </Provider>
  );
};

describe("Render HomePage Components", () => {
  test("should render loading message", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    const addButton = screen.getByText("create new blog");
    const loadingMessage = screen.getByText("Fetching data...");

    expect(addButton).toBeInTheDocument();
    expect(loadingMessage).toBeInTheDocument();
  });

  // test("Should render table", async () => {
  //   render(<MockHomePage />);

  //   await waitFor(() => {
  //     const table = screen.getByRole("table");
  //     expect(table).toBeInTheDocument();
  //   });
  // });
});
