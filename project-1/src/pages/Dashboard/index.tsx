import { useEffect, useState } from "react";
import { IPokemon } from "../../types/PokemonType";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
interface DashboardProps {
  fetchPokemonList: () => Promise<IPokemon[]>;
}

export const Dashboard = ({ fetchPokemonList }: DashboardProps) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/pokemon-detail/${id}`);
  };

  useEffect(() => {
    (async () => {
      const data = await fetchPokemonList();
      setPokemons(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <ul className={styles["container-pokemons"]}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} onClick={() => handleNavigate(pokemon.id)}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <strong>{pokemon.type}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
