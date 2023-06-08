import { useEffect, useState } from "react";
import { capitalizeWord } from "~/service/capitalizeService";
import { fetchEvolutionChain } from "~/service/fetchService";

export default function PokemonEvolution({ pokemon }) {
  const [evolutionData, setEvolutionData] = useState(null);

  useEffect(() => {
    async function getEvoData() {
      const data = await fetchEvolutionChain(pokemon.species.url);
      setEvolutionData(data);
    }
    getEvoData();
  }, [pokemon]);

  const evolveOne = evolutionData?.chain.evolves_to[0]?.species.name;
  const evolveTwo =
    evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name;
  return (
    <>
      {" "}
      {evolutionData && (
        <div className="carousel-item">
          <h3>Evolution chain</h3>
          {evolveOne && (
            <p>
              {capitalizeWord(evolutionData.chain.species.name)} evolves to:{" "}
              {capitalizeWord(evolveOne)}
            </p>
          )}
          {evolveTwo && (
            <p>
              {capitalizeWord(evolveOne)} evolves to:{" "}
              {capitalizeWord(evolveTwo)}
            </p>
          )}
        </div>
      )}
    </>
  );
}
