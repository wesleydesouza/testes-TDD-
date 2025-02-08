import { MemoryRouter } from "react-router-dom";
import MainRoutes from "../routes";
import { render, screen } from "@testing-library/react";

describe("Teste component MainRoutes", () => {
  test("Deve renderizar pagina de login", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      level: 2,
    });

    expect(title).toHaveTextContent("Sign In");
  });

  test("Deve renderizar pagina de cadastro", async () => {
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      level: 2,
    });

    expect(title).toHaveTextContent("Cadastra-se");
  });

  test("Deve renderizar pagina de dashboard", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      level: 1,
    });

    expect(title).toHaveTextContent("Dashboard");
  });

  test("Deve renderizar pagina de not found", async () => {
    render(
      <MemoryRouter initialEntries={["/qualquer-rota-nao-existe"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      level: 1,
    });

    expect(title).toHaveTextContent("404 - Not Found");
  });
});
