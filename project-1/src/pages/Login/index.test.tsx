import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Login } from ".";

const navigateMock = vi.fn();

describe("Testa o componente Login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("Deve ter um título 'Sign In'", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", {
      name: "Sign In",
    });
    expect(title).toBeInTheDocument();
  });

  test("Deve ter 2 inputs", async () => {
    render(<Login />);

    const inputText = await screen.findByRole("textbox");
    const password = await screen.findByPlaceholderText("Insira sua senha");

    expect(inputText).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test("Deve haver um bota na minha tela", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");

    expect(button.textContent).toBe("Login");
  });

  test("Deve haver um input para email", async () => {
    render(<Login />);

    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");

    expect(inputEmail).toBeInTheDocument();
  });

  test("Deve haver um input para a senha", async () => {
    render(<Login />);
    const inputPassword = await screen.findByPlaceholderText(
      "Insira sua senha"
    );

    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve haver um input para a senha", async () => {
    render(<Login />);
    const button = await screen.findByRole("button");

    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para ir para a pagina de 'sign-up'", async () => {
    render(<Login />);
    const link = await screen.findByText("Não tem cadastro? Clique aqui!");

    expect(link).toBeInTheDocument();
  });
});
