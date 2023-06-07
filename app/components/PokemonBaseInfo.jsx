import { useEffect, useState } from "react";
import { capitalizeWord } from "~/service/capitalizeService";
import { fetchPokemonInfo } from "~/service/fetchService";

export default function PokemonBaseInfo({ pokemon }) {
  const [pokeData, setPokeData] = useState(null);
  useEffect(() => {
    async function setPokeInfo() {
      if (!pokeData && pokemon) {
        setPokeData(pokemon);
      } /* else if (!pokeData && !pokemon) {
        const resp = await fetchPokemonInfo(pokeToFetch);
        setPokeData(resp);
      } */
    }
    setPokeInfo();
  }, [pokeData, pokemon]);
  console.log(pokeData);
  return (
    <>
      {pokeData && (
        <div>
          <div className="pokemon-type-container">
            <h3>Type</h3>
            {pokeData.types?.map((pokemon, index) => {
              return (
                <p key={index} className="pokemon-type">
                  {capitalizeWord(pokemon.type.name)}
                </p>
              );
            })}
          </div>
          <div className="pokemon-ability-container">
            <h3>Abilities</h3>
            {pokeData.abilities?.map((pokemon, index) => {
              return (
                <p key={index} className="pokemon-ability">
                  {capitalizeWord(pokemon.ability.name)}
                </p>
              );
            })}
          </div>
          <div className="pokemon-biometrics-container">
            <h3>Biomectics</h3>
            <p>Height: {pokeData.height}</p>
            <p>Weight: {pokeData.weight}</p>
            <p>Base experiance: {pokeData.base_experience}</p>
          </div>
        </div>
      )}
    </>
  );
}
