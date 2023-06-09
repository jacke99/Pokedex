import { useNavigate } from "@remix-run/react";
import { capitalizeWord } from "~/service/capitalizeService";

export default function PokeInfoTop({ pokemon }) {
  const navigate = useNavigate();

  function handleReturnClick() {
    navigate("/");
  }

  return (
    <div className="poke-info-top">
      <button className="poke-return-btn" onClick={handleReturnClick}>
        Return
      </button>

      <img
        className="pokemon-info-img"
        src={pokemon.sprites.front_default}
        alt="Pokemon"
      />
      <div className="poke-name-container">
        <h2 className="poke-info-name">{capitalizeWord(pokemon.name)}</h2>
        <div className="poke-type-container">
          {pokemon?.types?.map((pokemon, index) => {
            return (
              <p key={index} className="pokemon-type">
                {capitalizeWord(pokemon.type.name)}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
