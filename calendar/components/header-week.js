import {LitElement,html,css} from 'lit-element'
import {CONFIG} from '../services/config.js'
import {CULTURE} from '../services/culture.js'

class HeaderWeek extends LitElement{
    constructor() {
        super();
        this.daysOfWeek=CULTURE[CONFIG.culture].daysOfWeek;
    }
    render(){
       return  html`
            ${this.daysOfWeek.map(v=>html`<div>${v}</div>`)}
        `
    }
    static get styles() {
        return css`
            :host{
                display:grid;
                grid-template-columns: repeat(8,1.5625rem);
                grid-gap: 0.5rem;
                align-items:center;
                justify-items:center;
            }
        `
    }
}
customElements.define("pss-headerweek",HeaderWeek);