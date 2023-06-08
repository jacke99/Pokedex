import { useEffect, useState } from "react";
import { capitalizeWord } from "~/service/capitalizeService";

export default function PokemonStats({ pokemon }) {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    async function setPokeInfo() {
      if (!pokeData && pokemon) {
        setPokeData(pokemon);
      }
    }
    setPokeInfo();
  }, [pokeData, pokemon]);
  console.log(pokeData);
  return (
    <>
      {pokeData && (
        <div className="carousel-item">
          <h3>Base stats</h3>
          {pokeData.stats.map((stat, index) => {
            return (
              <p key={index}>
                {capitalizeWord(stat.stat.name)}: {stat.base_stat}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}
