import { capitalizeWord } from "~/service/capitalizeService";

export default function PokemonBaseInfo({ pokemon, speciesData }) {
  let flavorTexts = [
    speciesData?.flavor_text_entries[1].flavor_text,
    speciesData?.flavor_text_entries[3].flavor_text,
  ];
  for (let i = 0; i < flavorTexts.length; i++) {
    flavorTexts[i] = flavorTexts[i]
      .replace("\f", "\n")
      .replace("\u00ad\n", "")
      .replace("\u00ad", "")
      .replace(" -\n", " - ")
      .replace("-\n", "-")
      .replace("\n", " ")
      .replace("POKéMON", "pokémon");
  }

  return (
    <>
      <div className="carousel-item">
        {flavorTexts?.map((flavorText, index) => {
          return (
            <p key={index} className="poke-desc">
              {flavorText}
            </p>
          );
        })}
        <div className="carousel-card-container">
          <div className="ability-container">
            <h3 className="ability-title">Abilities:</h3>
            {pokemon.abilities?.map((pokemon, index) => {
              return (
                <p key={index} className="pokemon-ability">
                  {capitalizeWord(pokemon.ability.name)}
                </p>
              );
            })}
          </div>
          <div className="biometrics-container">
            <h3 className="biometrics-title">Biometrics:</h3>
            <p className="pokemon-bionetric">Height: {pokemon.height}</p>
            <p className="pokemon-bionetric">Weight: {pokemon.weight}</p>
            <p className="pokemon-bionetric">
              Base experiance: {pokemon.base_experience}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
