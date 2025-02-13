import { IPokemon } from "../types/PokemonType";

const BASE_URL = "http://localhost:3000";

export const fetchPokemonList = async (): Promise<IPokemon[]> => {
  const response = await fetch(`${BASE_URL}/pokemon`);
  const data = await response.json();

  return data;
};

export const fetchPokemonDetail = async (id: number): Promise<IPokemon> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();

  return data;
};
