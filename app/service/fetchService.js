export async function fetchPokemons() {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const data = await resp.json();
  return data;
}
export async function fetchPokemonInfo(URL) {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
}

export async function fetchPokemonImg(URL) {
  const resp = await fetch(URL);
  const data = await resp.json();
  const img = data.sprites.front_default;
  return img;
}
