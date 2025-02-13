import { fireEvent, render, screen } from "@testing-library/react";
import { Dashboard } from ".";
import { fetchPokemonList } from "../../api/PokemonApi";
import { faker } from "@faker-js/faker";

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Bulbasaur",
        image: faker.image.url(),
        type: "Grass",
      },
      {
        id: 2,
        name: "Ivysaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        type: "Grass",
      },
    ];
  });

const navigateMock = vi.fn();

describe("Testa o componente Dashboard", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
  }));

  test("Deve ter um título 'Dashboard'", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });

  test("Deve haver uma lista com 10 pokemons", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("Deve haver um Bulbasaur na lista", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const item = await screen.findByText("Bulbasaur");

    expect(item).toBeInTheDocument();
  });

  test("Deve ser possivel clicar no li para abrir a pagina de detalhe", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const link = await screen.findByText("Bulbasaur");

    fireEvent.click(link);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
