import { useEffect, useState } from "react";
import { capitalizeWord } from "~/service/capitalizeService";
import { fetchEvolutionChain } from "~/service/fetchService";

// export function loader({ request }) {
//   const url = new URL(request.url);
//   const query = url.searchParams.get("q");
// }

export default function PokemonEvolution({ pokemon }) {
  const [evolutionData, setEvolutionData] = useState(null);

  useEffect(() => {
    async function getEvoData() {
      const data = await fetchEvolutionChain(pokemon.species.url);
      setEvolutionData(data);
    }
    getEvoData();
  }, [pokemon]);

  useEffect(() => {
    if (evolutionData) {
      console.log(evolutionData.chain.evolves_to[0].species.name);
    }
  }, [evolutionData]);

  return (
    <>
      {" "}
      <h3>Evolution chain</h3>
      {evolutionData && (
        <div className="evo-container">
          <p>
            {capitalizeWord(pokemon.name)} evolves to:{" "}
            {capitalizeWord(evolutionData.chain.evolves_to[0].species.name)}
          </p>
          <p>
            {capitalizeWord(pokemon.name)} evolves to:{" "}
            {capitalizeWord(
              evolutionData.chain.evolves_to[0].evolves_to[0].species.name
            )}
          </p>
        </div>
      )}
    </>
  );
}
