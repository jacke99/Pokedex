import { json } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import PokemonBaseInfo from "~/components/PokemonBaseInfo";
import PokemonEvolution from "~/components/PokemonEvolution";
import { capitalizeWord } from "~/service/capitalizeService";
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
  const pokemon = useLoaderData();
  const navigate = useNavigate();

  function handleReturnClick() {
    navigate("/");
  }
  return (
    <>
      <div>
        <button onClick={handleReturnClick}>Return</button>
        <div className="pokemon-container">
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
          <h2 className="pokemon-name">{capitalizeWord(pokemon.name)}</h2>
          <PokemonBaseInfo pokemon={pokemon} />
          <PokemonEvolution pokemon={pokemon} />
        </div>
      </div>
    </>
  );
}
