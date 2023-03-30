export async function getPokemon() {
	try {
		const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
			return res.json();
		});
		return pokemon;
	} catch (error) {
		console.log(error);
	}
}
