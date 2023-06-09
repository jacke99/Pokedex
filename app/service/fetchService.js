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

export async function fetchEvolutionChain(URL) {
  const resp = await fetch(URL);
  const speciesData = await resp.json();
  console.log(speciesData);
  const evoURL = speciesData.evolution_chain.url;
  const evoResp = await fetch(evoURL);
  const evoData = await evoResp.json();

  return { evoData, speciesData };
}
