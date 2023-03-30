import './components/indexComponents';
import { getPokemon } from './services/fetch';
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
			this.cardtest.push(pokecard);
		});
		
		this.render(this.cardtest);
	}

	render(cardtest: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const pokenNameSec = this.ownerDocument.createElement('section');
			cardtest.forEach((card: any) => {
				pokenNameSec.appendChild(card);
			});
			this.shadowRoot.appendChild(pokenNameSec);
		}
	}
}

customElements.define('app-container', AppContainer);
