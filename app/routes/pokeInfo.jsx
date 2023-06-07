import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import PokemonCard from "~/components/PokemonCard";
import { fetchPokemonInfo } from "~/service/fetchService";

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
  const pokeData = useLoaderData();
  const navigate = useNavigate();

  function handleReturnClick() {
    navigate("/");
  }
  return (
    <div>
      <button onClick={handleReturnClick}>Return</button>
      <PokemonCard pokemonInfo={pokeData} />
    </div>
  );
}
