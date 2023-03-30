export async function getPokemon() {
	try {
		const url = await fetch('https://pokeapi.co/api/v2/pokemon/10').then((res) => {
			return res.json();
		});
		return url;
	} catch (error) {
		console.log(error);
	}
}
