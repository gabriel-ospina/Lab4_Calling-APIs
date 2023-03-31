const pokeArray: any = [];

export async function getPokemon() {
	try {
		
		for (let index = 1; index < 11; index++) {
			let pokeid = Math.floor(Math.random()*1000);
			const url = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeid).then((res) => {
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

// const idArray: any = [];
// while(idArray.includes(pokeid,0)){
			// 	let pokeid = Math.floor(Math.random()*10);
			// }
			// idArray.push(pokeid);
