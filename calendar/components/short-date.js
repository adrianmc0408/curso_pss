import {LitElement,html,css} from 'lit-element'
import {FormatDate} from '../services/formatdate.js'
class ShortDate extends LitElement{
    constructor(){
        super()
        this.date=new Date(Date.now());
    }
    getFormate(){
        return FormatDate.getCurrentMonth(this.date);
    }
    render(){
        return html `<div>${this.getFormate()}</div>`
    }
    

    static get styles() {
        return css`
          :host { 
            font-size:0.75rem;
            color:var(--colorshortdate,grey);
            display:flex;
            align-items:center;
            justify-items:center;
        }
        :host(:hover){
            color:var(--colorcalendar,white);
        }
        `;
      }
    static get properties(){
        return{
            date:{type:Object}
        }
    }
    
}
customElements.define('pss-shortdate',ShortDate);