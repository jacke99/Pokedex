import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PokeInfoCarousel from "~/components/PokeInfoCarousel";
import PokeInfoTop from "~/components/PokeInfoTop";
import { fetchEvolutionChain, fetchPokemonInfo } from "~/service/fetchService";
import styles from "~/styles/pokeInfo.css";

export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  const pokeData = await fetchPokemonInfo(
    `https://pokeapi.co/api/v2/pokemon/${query}`
  );
  const data = await fetchEvolutionChain(pokeData.species.url);
  if (!pokeData) throw new Response("", { status: 404 });
  if (!data) throw new Response("", { status: 404 });
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
