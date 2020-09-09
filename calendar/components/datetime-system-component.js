import {LitElement,html,css} from 'lit-element'
import PubSub from '../services/pubsub.js'
import {chanel} from '../services/chanel.js'
import {FormatDate} from '../services/formatdate.js'
class DateTimeSystemComponent extends LitElement{
    constructor(){
        super()
        this._unsuscribe=PubSub.sub(chanel.CHANGEDATE,(date)=>this.date=FormatDate.getCurrentDate(date));
    }
    render(){
        return html `<div>${this.date}</div>`
    }
    disconnectedCallback(){
        this._unsuscribe();
    }
    

    static get styles() {
        return css`
          :host { 
            font-size:0.75rem;
            color:var(--colordate,blue);
        }
        `;
      }
    static get properties(){
        return{
            date:{type:String}
        }
    }
    
}
customElements.define('pss-datetime',DateTimeSystemComponent);