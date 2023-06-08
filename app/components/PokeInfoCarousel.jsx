import { useState } from "react";
import PokemonBaseInfo from "./PokemonBaseInfo";
import PokemonEvolution from "./PokemonEvolution";
import PokemonStats from "./PokemonStats";

export default function PokeInfoCarousel({ pokemon }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
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
      </div>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        <PokemonBaseInfo pokemon={pokemon} />
        <PokemonEvolution pokemon={pokemon} />
        <PokemonStats pokemon={pokemon} />
      </div>
      {/* <div className="carousel-buttons">
        <button onClick={() => updateIndex(activeIndex - 1)}>left</button>

        <button onClick={() => updateIndex(activeIndex + 1)}>right</button>
      </div> */}
    </div>
  );
}
