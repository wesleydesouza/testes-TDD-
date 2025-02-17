import { faker } from "@faker-js/faker";
import { IPokemon } from "../types/PokemonType";
import { fetchPokemonDetail, fetchPokemonList } from "./PokemonApi";

globalThis.fetch = vi.fn();

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("Testa a API do Pokemon", () => {
  test("Verifica se foi feito get list para a url correta", async () => {
    const pokemonListResponse: IPokemon[] = [
      {
        id: 1,
        name: faker.animal.bird.name,
        image: faker.image.url(),
        type: faker.animal.type(),
      },
      {
        id: 2,
        name: faker.animal.bird.name,
        image: faker.image.url(),
        type: faker.animal.type(),
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

    const pokemonList = await fetchPokemonList();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon");
    expect(pokemonList).toStrictEqual(pokemonListResponse);
  });

  test("Verifica se foi feito get detail para a url correta", async () => {
    const pokemonDetailResponse: IPokemon = {
      id: 1,
      name: faker.animal.bird.name,
      image: faker.image.url(),
      type: faker.animal.type(),
    };

    fetch.mockResolvedValue(createFetchResponse(pokemonDetailResponse));

    const pokemon = await fetchPokemonDetail(1);

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon/1");
    expect(pokemon).toStrictEqual(pokemonDetailResponse);
  });
});
