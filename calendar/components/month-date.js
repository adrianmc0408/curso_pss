import {LitElement,html,css} from 'lit-element'
import {DateService} from '../services/dateservice.js'
import {Day} from './day.js'
export class MonthDate extends LitElement{
    
    constructor(){
        super();
        this._days = [];
    }
    static get properties() {
        return {
            date:{type:Object}
        };
    }
    static get styles() {
        return css`
            :host{
                display:grid;
                grid-template-columns: repeat(7,1.5625rem);
                grid-template-rows: repeat(6,1.5625rem);
                grid-gap: 0.5rem;
            }
        `
    }
    handlerClickDay(ev){
        const day = ev.composedPath().find(n=>n instanceof Day);
        if(day){
            [...this.shadowRoot.children].forEach(day=>{
                day.selected = false; 
            })
            day.selected = true;            
            ev.stopPropagation();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.handlerClickDay);
      }
      disconnectedCallback() {
        this.removeEventListener('click', this.handlerClickDay);
        super.disconnectedCallback();
      }
    render(){
        this._days=DateService.getMonthCalendar(this.date);
        return html`
            ${this._days.map(d=>html`<pss-day .data="${d}"></pss-day>`)}
        `
    }
} 
customElements.define("pss-monthdate",MonthDate)