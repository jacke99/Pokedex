import { useState } from "react";
import PokemonBaseInfo from "./PokemonBaseInfo";
import PokemonEvolution from "./PokemonEvolution";
import PokemonStats from "./PokemonStats";

export default function PokeInfoCarousel({ pokemon, pokemonEvo, speciesData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 3) {
      newIndex = 2;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div className="carousel-nav">
        <ul className="carousel-nav-list">
          <li onClick={() => updateIndex(0)} className="carousel-nav-list-item">
            About
          </li>
          <li onClick={() => updateIndex(1)} className="carousel-nav-list-item">
            Evolution
          </li>
          <li onClick={() => updateIndex(2)} className="carousel-nav-list-item">
            Stats
          </li>
        </ul>
        <div
          className="nav-slider"
          style={{ transform: `translate(${activeIndex * 245}%)` }}
        ></div>
      </div>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        <PokemonBaseInfo pokemon={pokemon} speciesData={speciesData} />
        <PokemonEvolution pokemonEvo={pokemonEvo} />
        <PokemonStats pokemon={pokemon} activeIndex={activeIndex} />
      </div>
    </div>
  );
}
