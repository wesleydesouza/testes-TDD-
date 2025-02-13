import { render, screen } from "@testing-library/react";
import { PokemonDetail } from ".";
import { fetchPokemonDetail } from "../../api/PokemonApi";
import { faker } from "@faker-js/faker";
import * as rrd from "react-router-dom";

const mockFn = vi.fn(fetchPokemonDetail);

const mockFetchPokemonDetailFn = mockFn.mockImplementation(async () => {
  return {
    id: 1,
    name: "Bulbasaur",
    image: faker.image.url(),
    type: "Grass",
  };
});

describe("Testa o componente PokemonDetail", () => {
  vi.mock("react-router-dom", () => ({
    useParams: () => ({
      id: 1,
    }),
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("Deve ter um título na pagina", async () => {
    render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

    const title = await screen.findByText("Bulbasaur");

    expect(title).toBeInTheDocument();
  });

  test("Deve haver um link para voltar", async () => {
    render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

    const link = await screen.findByText("Voltar");

    expect(link).toBeInTheDocument();
  });

  test("Deve validar nao vier o parametro na rota", async () => {
    vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({ id: "0" }));

    render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

    const errorTest = await screen.findByText("Id inválido");

    expect(errorTest).toBeInTheDocument();
  });
});
