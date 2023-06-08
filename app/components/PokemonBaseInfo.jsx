import { useEffect, useState } from "react";
import { capitalizeWord } from "~/service/capitalizeService";

export default function PokemonBaseInfo({ pokemon }) {
  const [pokeData, setPokeData] = useState(null);
  useEffect(() => {
    async function setPokeInfo() {
      if (!pokeData && pokemon) {
        setPokeData(pokemon);
      }
    }
    setPokeInfo();
  }, [pokeData, pokemon]);
  return (
    <>
      {pokeData && (
        <div className="carousel-item">
          <h3>Abilities</h3>
          {pokeData.abilities?.map((pokemon, index) => {
            return (
              <p key={index} className="pokemon-ability">
                {capitalizeWord(pokemon.ability.name)}
              </p>
            );
          })}

          <h3>Biometrics</h3>
          <p>Height: {pokeData.height}</p>
          <p>Weight: {pokeData.weight}</p>
          <p>Base experiance: {pokeData.base_experience}</p>
        </div>
      )}
    </>
  );
}
