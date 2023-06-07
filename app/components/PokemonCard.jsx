import { capitalizeWord } from "~/service/capitalizeService";

export default function PokemonCard({ pokemonInfo }) {
  return (
    <div className="pokemon-container">
      <img src={pokemonInfo.sprites.front_default} alt="Pokemon" />
      <h2 className="pokemon-name">{capitalizeWord(pokemonInfo.name)}</h2>
      <div className="pokemon-type-container">
        {pokemonInfo.types.map((pokemon, index) => {
          return (
            <p key={index} className="pokemon-type">
              {capitalizeWord(pokemon.type.name)}
            </p>
          );
        })}
      </div>
    </div>
  );
}
