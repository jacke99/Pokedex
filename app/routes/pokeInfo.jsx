import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PokeInfoCarousel from "~/components/PokeInfoCarousel";
import PokeInfoTop from "~/components/PokeInfoTop";
import { fetchPokemonInfo } from "~/service/fetchService";
import styles from "~/styles/pokeInfo.css";

export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  const pokeData = await fetchPokemonInfo(
    `https://pokeapi.co/api/v2/pokemon/${query}`
  );
  if (!pokeData) throw new Response("", { status: 404 });
  return json(pokeData);
}

export default function PokeInfo() {
  const pokemon = useLoaderData();
  const pokeWrapperClass = `pokemon-info-wrapper ${pokemon.types[0].type.name}`;
  return (
    <div className={pokeWrapperClass}>
      <PokeInfoTop pokemon={pokemon} />
      <PokeInfoCarousel pokemon={pokemon} />
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
