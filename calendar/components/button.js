import { LitElement, html, css } from 'lit-element'
export const actions = {
    UP: 'up',
    DOWN: 'down'
}
class Button extends LitElement {
    constructor() {
        super();
        this.action =actions.UP
    }
    static get properties() {
        return {
            action: { type: String }
        }
    }
    getClass(){
        return `arrow  ${this.action}`
    }
    handlerClick(ev){
        ev.stopPropagation();
        this.dispatchEvent(this.createCustomEvents())
    }
    createCustomEvents(){
        return new CustomEvent('changemonth',{
           detail: {
                action:this.action
            }
        })
    }
    render(){
        return html`
        <button @click="${this.handlerClick}">
            <i class="${this.getClass()}"></i>
        </button>`
    }
    static get styles(){
        return css`
            .arrow {
                border: solid black;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;
            }
            .up {
                transform: rotate(-135deg);
                -webkit-transform: rotate(-135deg);
            }
            
            .down {
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            } 
        `
    }
    
}
customElements.define("pss-button", Button);