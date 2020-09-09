import {LitElement,html,css} from 'lit-element'
import PubSub from '../services/pubsub.js'
import {chanel} from '../services/chanel.js'
import {FormatDate} from '../services/formatdate.js'
class TimerComponent extends LitElement{
    constructor(){
        super()
        this._unsuscribe=PubSub.sub(chanel.CHANGEDATE,(date)=>this.date=FormatDate.getTimer(date));
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
            font-size:1.25rem
        }
        `;
      }
    static get properties(){
        return{
            date:{type:String}
        }
    }
    
}
customElements.define('pss-timer',TimerComponent);