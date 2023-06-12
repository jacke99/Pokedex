import { fetchAllPokemons, fetchPokemonInfo } from "./fetchService";

export async function searchPokemon(query) {
  if (typeof query === "number") {
    const data = await fetchPokemonInfo(query);
    return data;
  } else if (typeof query === "string") {
    const data = await fetchPokemonInfo(query);
    if (data) {
      return data;
    } else {
      const pokemons = await fetchAllPokemons();
      console.log(pokemons);
      const pokemonMatch = [];
      pokemons.forEach((pokemon) => {
        if (pokemon.name.includes(query)) {
          pokemonMatch.push(pokemon);
        }
      });
      return pokemonMatch;
    }
  }
}
