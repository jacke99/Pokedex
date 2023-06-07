import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import PokemonList from "~/components/PokemonList";
import styles from "~/styles/index.css";
import buttonStyles from "~/styles/changePage.css";

import { fetchPokemonInfo, fetchPokemons } from "~/service/fetchService";
import ChangePage from "~/components/ChangePage";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const pokemons = await fetchPokemons();
  return pokemons;
}

export default function Index() {
  const data = useLoaderData();

  const [pokeData, setPokeData] = useState(null);
  const [loadNewPokemons, setLoadNewPokemons] = useState(null);

  useEffect(() => {
    Promise.all(
      data.results?.map((pokemon) => fetchPokemonInfo(pokemon.url))
    ).then((response) => setPokeData(response));
  }, [data]);

  useEffect(() => {
    if (loadNewPokemons) {
      console.log(loadNewPokemons);
      Promise.all(
        loadNewPokemons.results?.map((pokemon) => fetchPokemonInfo(pokemon.url))
      ).then((response) => setPokeData(response));
    }
  }, [loadNewPokemons]);

  return (
    <div>
      <PokemonList pokeData={pokeData} />
      {pokeData && (
        <ChangePage setLoadNewPokemons={setLoadNewPokemons} data={data} />
      )}
    </div>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: buttonStyles },
  ];
}
