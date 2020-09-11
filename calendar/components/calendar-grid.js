import {LitElement,html,css} from 'lit-element'
import {actions} from './button.js'
import './short-date.js'
import './header-week.js'
import './month-date.js'

import {DateService} from '../services/dateservice.js'

class CalendarGrid extends LitElement{
    constructor(){
        super();
        this.date=new Date(Date.now());
    }
    static get properties(){
        return {
            date:{type:Object}
        }
    }
    static get styles() {
        return css`
            :host{
                display:grid;
                grid-template:repeat(8,1.5625rem) / repeat(7,1.5625rem);
                grid-gap: 0.5rem;
                
            }
            pss-shortdate{
                grid-area: 1 / 1 / 1 / 6;
            }
            .down{
                grid-area: 1 / 7 / 1 / 7;
            }
            .up{ 
                grid-area: 1 / 6 / 1/ 6;
                margin-top:0.25rem;
            }
            pss-monthdate{
                grid-row-start:3;
            }
            
        `
    }
    /*work-arround
    handlerClickDay(ev){
        const day = ev.composedPath().find(n=>n instanceof Day);
        if(day){
            [...day.parentNode.children].forEach(day=>{
                day.selected = false; 
            })
            day.selected = true;            
            ev.stopPropagation();
            
        }
    }*/

    hanlerChangeMonth(ev){
        ev.stopPropagation();
        if (ev.detail.action === actions.DOWN){
            this.date = DateService.getNextOrPreviosMonth(this.date,1)

        }else{
            this.date = DateService.getNextOrPreviosMonth(this.date,-1)
        }
        
    }
    render() {
        return html`
            <pss-shortdate .date="${this.date}"></pss-shortdate>
            <pss-button @changemonth ="${this.hanlerChangeMonth}" class=${actions.UP} .action="${actions.UP}"></pss-button>
            <pss-button @changemonth ="${this.hanlerChangeMonth}" class=${actions.DOWN} .action="${actions.DOWN}"></pss-button>
            <pss-headerweek ></pss-headerweek>
            <pss-monthdate .date="${this.date}"></pss-monthdate>
            
        `;
        
    }
}
customElements.define("pss-grid",CalendarGrid);