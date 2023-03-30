const pokeArray: any = [];

export async function getPokemon() {
	try {
		for (let index = 1; index < 6; index++) {
			const url = await fetch('https://pokeapi.co/api/v2/pokemon/' + index).then((res) => {
				return res.json();
			});
			pokeArray.push(url);
			console.log(pokeArray);
		}
		return pokeArray;

	} catch (error) {
		console.log(error);
	}
}

