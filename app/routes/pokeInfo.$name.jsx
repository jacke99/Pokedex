import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PokeInfoCarousel from "~/components/PokeInfoCarousel";
import PokeInfoTop from "~/components/PokeInfoTop";
import { fetchEvolutionChain, fetchPokemonInfo } from "~/service/fetchService";
import styles from "~/styles/pokeInfo.css";

export async function loader({ params }) {
  const query = params.name;
  const pokeData = await fetchPokemonInfo(
    `https://pokeapi.co/api/v2/pokemon/${query}`
  );
  if (!pokeData)
    throw json(
      { message: "Could not find the selected pokemon" },
      { status: 404 }
    );

  const data = await fetchEvolutionChain(pokeData.species.url);
  if (!data)
    throw json(
      { message: "Could not find the selected pokemons evolution chain" },
      { status: 404 }
    );

  const pokeEvoData = data.evoData;
  const speciesData = data.speciesData;
  return json({ pokeData, pokeEvoData, speciesData });
}

export default function PokeInfo() {
  const data = useLoaderData();
  const pokemon = data.pokeData;
  const pokemonEvo = data.pokeEvoData;
  const speciesData = data.speciesData;

  const pokeWrapperClass = `pokemon-info-wrapper ${pokemon.types[0].type.name}`;
  return (
    <div className={pokeWrapperClass}>
      <PokeInfoTop pokemon={pokemon} />
      <PokeInfoCarousel
        pokemon={pokemon}
        pokemonEvo={pokemonEvo}
        speciesData={speciesData}
      />
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
