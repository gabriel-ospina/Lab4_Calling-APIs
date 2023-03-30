export enum CardAttribute{
    "name"="name",
    "image"="image"
}

class Card extends HTMLElement{
     name?:string
     image?: string

     static get observedAttributes(){
        const cardattrs: Record<CardAttribute, null>= {
            name: null,
            image: null,
        }
        return Object.keys(cardattrs)
     }

     constructor(){
        super();
        this.attachShadow({ mode: "open"})
     }

     connectedCallback(){
        this.render();
     }

     attributeChangedCallback(
        propName: CardAttribute,
        _: string | undefined,
        newValue: string | undefined
        ){
            this[propName] = newValue;
            this.render();
        }

     render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <img src="${this.image}">
            <h1>${this.name}</h1>
            `
        }
     }
}

customElements.define("my-card", Card);
export default Card;