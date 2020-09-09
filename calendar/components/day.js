import {LitElement,html,css} from 'lit-element'
export class Day extends LitElement{
    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            data:{type:Object}
        };
    }
    getClass(){
        !this.data.isCurrentMonth ? "notcurrentmonth":""
    }
    render() {
        return html`
            <div class=${this.getClass()}>${this.data.date.getDate()}</div>
        `;
    }
    static get styles() {
        return css`
            :host(:hover){
               border:1px solid grey; 
            }
            .notcurrentmonth:{
                color:grey;
            }
        `
    }
}
customElements.define("pss-day",Day);