import { capitalizeWord } from "~/service/capitalizeService";

export default function PokemonStats({ pokemon, activeIndex }) {
  return (
    <>
      {pokemon && (
        <div className="carousel-item">
          <h3 className="stat-title">Base stats</h3>
          {pokemon.stats.map((stat, index) => {
            let color;
            if (
              stat.stat.name === "defense" ||
              stat.stat.name === "special-defense"
            ) {
              color = "rgb(0, 30, 210)";
            } else if (
              stat.stat.name === "special-attack" ||
              stat.stat.name === "attack"
            ) {
              color = "rgb(240, 15, 0)";
            } else if (stat.stat.name === "speed") {
              color = "rgb(220, 220, 0)";
            } else {
              color = "rgb(0, 165, 30)";
            }

            let barWidth = "";
            let activeAnimation = "";
            if (activeIndex === 2) {
              barWidth = stat.base_stat;
              activeAnimation = "progressAnimationStrike 3s";
            } else {
              barWidth = 0;
              activeAnimation = "";
            }
            return (
              <div className="stat-container" key={index}>
                <p className="stat-text">
                  {capitalizeWord(stat.stat.name)}: {stat.base_stat}
                </p>
                <div
                  style={{ animation: activeAnimation }}
                  className="stat-bar-container"
                >
                  <div
                    style={{
                      width: `${barWidth}%`,
                      backgroundColor: color,
                    }}
                    className="stat-bar"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
