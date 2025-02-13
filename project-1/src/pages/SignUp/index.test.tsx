import { fireEvent, render, screen } from "@testing-library/react";
import { SignUp } from ".";

const navigateMock = vi.fn();

describe("Testa componente SignUp", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("Deve haver 3 inputs na minha tela", async () => {
    render(<SignUp />);

    const inputs = await screen.getAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("Deve haver inputs nome, email e senha", async () => {
    render(<SignUp />);

    const inputName = await screen.getByPlaceholderText("Insira seu nome");
    const inputEmail = await screen.getByPlaceholderText("Insira seu e-mail");
    const inputPassword = await screen.getByPlaceholderText("Insira sua senha");

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve haver 1 botao na minha tela", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Sign Up");
  });

  test("Deve haver um titulo 'Cadastra-se'", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", {
      level: 2,
    });

    expect(title).toHaveTextContent("Cadastra-se");
  });

  test("Deve navegar para a pagina de 'dashboard'", async () => {
    render(<SignUp />);

    const button = await screen.findByText("Sign Up");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para ir para a pagina de 'login'", async () => {
    render(<SignUp />);

    const link = await screen.getByText("Já tem cadastro? Clique aqui!");

    expect(link).toBeInTheDocument();
  });
});
