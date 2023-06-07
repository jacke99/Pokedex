import { useNavigate } from "@remix-run/react";
import { capitalizeWord } from "~/service/capitalizeService";

export function loader() {}

export default function PokemonList({ pokeData }) {
  const navigate = useNavigate();

  async function handlePokeClick(event) {
    const { value } = event.target.attributes.value;
    navigate(`/pokeinfo/?q=${pokeData[value].name}`, {
      state: { pokemon: pokeData[value] },
    });
  }
  return (
    <div className="poke-list-wrapper">
      {pokeData &&
        pokeData?.map((pokemon, index) => {
          const pokeTypeClass = `poke-list-container ${pokemon.types[0].type.name}`;
          return (
            <div className={pokeTypeClass} key={index}>
              <img
                className="poke-list-img"
                src={pokemon.sprites.front_default}
                alt="Pokemon"
              />
              <p
                className="poke-list-name"
                value={index}
                onClick={handlePokeClick}
              >
                {capitalizeWord(pokemon.name)}
              </p>
            </div>
          );
        })}
    </div>
  );
}
