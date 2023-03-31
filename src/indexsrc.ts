import './components/indexComponents';
import { getPokemon } from './services/fetch';
import { typeColors } from './services/typeColors';
import Card, { CardAttribute } from './components/cards/cards';

class AppContainer extends HTMLElement {
	cardtest: Card[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const pokemonData = await getPokemon();
		console.log(pokemonData);

		pokemonData.forEach((pokemon: any) => {
			const pokecard = this.ownerDocument.createElement('my-card') as Card;
			pokecard.setAttribute(CardAttribute.name, pokemon.name);
			pokecard.setAttribute(CardAttribute.image, pokemon.sprites.front_default);
			pokecard.setAttribute(CardAttribute.hp, pokemon.stats[0].base_stat)
			pokecard.setAttribute(CardAttribute.spd, pokemon.stats[5].base_stat)
			pokecard.setAttribute(CardAttribute.atck, pokemon.stats[1].base_stat)
			pokecard.setAttribute(CardAttribute.def, pokemon.stats[2].base_stat)
			pokecard.setAttribute(CardAttribute.spc, pokemon.stats[3].base_stat)
			pokecard.setAttribute(CardAttribute.spcdef, pokemon.stats[4].base_stat)
			pokecard.setAttribute(CardAttribute.type1, pokemon.types[0].type.name)
			if (pokemon.types.length> 1){
				pokecard.setAttribute(CardAttribute.type2, pokemon.types[1].type.name)
			}
			else{
				pokecard.setAttribute(CardAttribute.type2, '')
			}
			this.cardtest.push(pokecard);
		});
		
		this.render(this.cardtest);
	}

	render(cardtest: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` <link rel="stylesheet" href="../src/app.css">`;
			
			const pokenNameSec = this.ownerDocument.createElement('section');
			cardtest.forEach((card: any) => {
				pokenNameSec.appendChild(card);
			});
			this.shadowRoot.appendChild(pokenNameSec);

		}
	}
}

customElements.define('app-container', AppContainer);
