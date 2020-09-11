import {LitElement, html,css} from 'lit-element';
import  './timer-component.js'
import './datetime-system-component.js'
import './calendar-grid.js'

class Calendar extends LitElement{
    render(){
        return html`
            <pss-timer></pss-timer>
            <pss-datetime></pss-datetime>
            <pss-grid></pss-grid>
        `
    }
    static get styles() {
        return css`
          :host { 
            color: var(--colorcalendar,white);
            background-color:var(--backgrouncolorcalendar,black);
            display:block; 
            padding:1.25rem !important;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none; 
            max-width:16.3125rem;
            min-width:16.3125rem;
        }
        `;
      }
}

customElements.define('pss-calendar', Calendar)