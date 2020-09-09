import {LitElement,html,css} from 'lit-element'
import {DateService} from '../services/dateservice.js'
import './day.js'
class MonthDate extends LitElement{
    
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
                grid-gap: 0.5rem;
            }
        `
    }
    render(){
        const days=DateService.getMonthCalendar(this.date);
        return html`
            ${days.map(d=>html`<pss-day .data="${d}"></pss-day>`)}
        `
    }
} 
customElements.define("pss-monthdate",MonthDate)