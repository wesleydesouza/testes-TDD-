import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IPokemon } from "../../types/PokemonType";
import styles from "./styles.module.scss";

interface PokemonDetailProps {
  fetchPokemonDetail: (id: number) => Promise<IPokemon>;
}

export const PokemonDetail = ({ fetchPokemonDetail }: PokemonDetailProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>({
    id: 0,
    name: "",
    image: "",
    type: "",
  });
  const [error, setError] = useState<string>("");
  const params = useParams();

  useEffect(() => {
    (async () => {
      setError("");
      if (!params.id || params.id === "0") {
        setError("Id inválido");
        return;
      }
      const data = await fetchPokemonDetail(parseInt(params.id));
      setPokemon(data);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.image} alt={pokemon?.name} />
        <strong>{pokemon?.type}</strong>
      </div>
      <Link to="/dashboard">Voltar</Link>
      {error && <strong>{error}</strong>}
    </div>
  );
};
