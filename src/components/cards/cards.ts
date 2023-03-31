export enum CardAttribute{
    "name"="name",
    "image"="image",
    "hp"="hp",
    "spd"="spd",
    "atck"="atck",
    "def"="def",
    "spc"="spc",
    "spcdef"="spcdef",
    "type1"="type1",
    "type2"="type2"
}

class Card extends HTMLElement{
     name?:string
     image?: string
     hp?: number
     spd?: number
     atck?: number
     def?: number
     spc?: number
     spcdef?: number
     type1?: string
     type2?: string

     static get observedAttributes(){
        const cardattrs: Record<CardAttribute, null>= {
            name: null,
            image: null,
            hp: null,
            spd:null,
            atck: null,
            def:null,
            spc: null,
            spcdef: null,
            type1: null,
            type2: null
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
            switch (propName) {
               case CardAttribute.hp:
                  this.hp = newValue? Number(newValue) : undefined;  
               break;

               case CardAttribute.spd:
                  this.spd = newValue? Number(newValue) : undefined;  
               break;

               case CardAttribute.atck:
                  this.atck = newValue? Number(newValue) : undefined;  
               break;

               case CardAttribute.def:
                  this.def = newValue? Number(newValue) : undefined;  
               break;
               
               case CardAttribute.spc:
                  this.spc = newValue? Number(newValue) : undefined;  
               break;
               
               case CardAttribute.spcdef:
                  this.spcdef = newValue? Number(newValue) : undefined;  
               break;
            
               default:
                  this[propName] = newValue;
               break;
            }
            this.render();
        }

     render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <img src="${this.image}">
            <h1>${this.name || "This pokémon doesn't exist"}</h1>
            <section class="types-cont">
               <div class="type">
                  <h3>${this.type1 || "Unknown"}</h3>
               </div>
               <div class="type">
                  <h3>${this.type2 || "Unknown"}</h3>
               </div>
            </section>
            <h2>Stats</h2>
            <section>
               <span><strong>Health: </strong>${this.hp || "Unknown"}</span>
               <span><strong>Speed: </strong>${this.spd || "Unknown"}</span>
               <span><strong>Attack: </strong>${this.atck || "Unknown"}</span>
               <span><strong>Defense: </strong>${this.def || "Unknown"}</span>
               <span><strong>Special Attack: </strong>${this.spc || "Unknown"}</span>
               <span><strong>Special Defense: </strong>${this.spcdef || "Unknown"}</span>
            </section>
            `
        }
     }
}

customElements.define("my-card", Card);
export default Card;