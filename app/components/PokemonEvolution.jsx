import { useEffect, useState } from "react";
import { capitalizeWord } from "~/service/capitalizeService";
import { fetchPokemonInfo } from "~/service/fetchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PokemonEvolution({ pokemonEvo }) {
  const [evoImg, setEvoImg] = useState(null);
  const evolveOne = pokemonEvo?.chain.evolves_to[0];
  const evolveTwo = pokemonEvo?.chain.evolves_to[0]?.evolves_to[0];

  useEffect(() => {
    const pokeName = [
      {
        name: pokemonEvo?.chain.species.name,
      },
      {
        name: evolveOne?.species.name,
      },
      { name: evolveTwo?.species.name },
    ];
    Promise.all(
      pokeName?.map((poke) =>
        fetchPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      )
    ).then((response) => setEvoImg(response));
  }, [evolveOne, evolveTwo, pokemonEvo]);

  return (
    <>
      {pokemonEvo && (
        <div className="carousel-item">
          <h3 className="evo-title">Evolution chain</h3>

          {evoImg && evoImg[1] ? (
            <div className="evo-container">
              <div>
                <img src={evoImg[0]?.sprites.front_default} alt="Pokemon" />
                <p className="evo-name">
                  {capitalizeWord(pokemonEvo.chain.species.name)}
                </p>
              </div>

              <div className="evo-arrow-container">
                {evolveOne.evolution_details[0].min_level ? (
                  <p>lvl {evolveOne.evolution_details[0].min_level}</p>
                ) : (
                  ""
                )}
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <img src={evoImg[1]?.sprites.front_default} alt="Pokemon" />
                <p className="evo-name">
                  {capitalizeWord(evolveOne.species.name)}
                </p>
              </div>
            </div>
          ) : (
            <p>No evolution found</p>
          )}
          {evoImg && evoImg[2] ? (
            <div className="evo-container">
              <div>
                <img src={evoImg[1]?.sprites.front_default} alt="Pokemon" />
                <p className="evo-name">
                  {capitalizeWord(evolveOne.species.name)}
                </p>
              </div>

              <div className="evo-arrow-container">
                {evolveTwo.evolution_details[0].min_level ? (
                  <p>lvl {evolveTwo.evolution_details[0].min_level}</p>
                ) : (
                  ""
                )}
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <img src={evoImg[2]?.sprites.front_default} alt="Pokemon" />
                <p className="evo-name">
                  {capitalizeWord(evolveTwo.species.name)}
                </p>
              </div>
            </div>
          ) : (
            <p>No evolution found</p>
          )}
        </div>
      )}
    </>
  );
}
