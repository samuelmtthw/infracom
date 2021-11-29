import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router";
import AddPage from "../pages/AddPage";

const MockAddPage = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <AddPage />
      </MemoryRouter>
    </Provider>
  );
};

describe("Render AddPage Components", () => {
  test("should render form", () => {
    render(<MockAddPage />);

    const form = screen.getByTestId("add-form");
    expect(form).toBeInTheDocument();
  });

  test("should render form inputs", () => {
    render(<MockAddPage />);

    const TitleInput = screen.getByLabelText("Title");
    const AuthorInput = screen.getByLabelText("Author");
    const ContentInput = screen.getByLabelText("Content");
    const ThumbnailInput = screen.getByLabelText("Thumbnail URL");

    expect(TitleInput).toBeInTheDocument();
    expect(AuthorInput).toBeInTheDocument();
    expect(ContentInput).toBeInTheDocument();
    expect(ThumbnailInput).toBeInTheDocument();
  });
});
