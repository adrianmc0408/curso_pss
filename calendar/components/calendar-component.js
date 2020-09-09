import {LitElement, html,css} from 'lit-element';
import  './timer-component.js'
import './datetime-system-component.js'

class Calendar extends LitElement{
    render(){
        return html`
            <pss-timer></pss-timer>
            <pss-datetime></pss-datetime>
        `
    }
    static get styles() {
        return css`
          :host { 
            color: var(--colorcalendar,white);
            background-color:var(--backgrouncolorcalendar,black);
            display:block; 
        }
        `;
      }
}

customElements.define('pss-calendar', Calendar)