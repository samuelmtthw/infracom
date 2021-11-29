import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavBar from "../components/NavBar";

describe("Render Components", () => {
  test("should render navbar", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const nav = screen.getByRole("navigation");
    const logo = screen.getByText("mtthw.");
    const homeLink = screen.getByText("home");
    const statLink = screen.getByText("statistics");

    expect(nav).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(statLink).toBeInTheDocument();
  });
});

// describe("Navigate Between Pages", () => {
//   test("should navigate to home", () => {
//     render(
//       <MemoryRouter>
//         <NavBar />
//       </MemoryRouter>
//     );
//   });

//   test("should navigate to home", () => {
//     render(
//       <MemoryRouter>
//         <NavBar />
//       </MemoryRouter>
//     );
//   });
// });
