import {LitElement,html,css} from 'lit-element'
export class Day extends LitElement{
    /**
      * Object describing property-related metadata used by Polymer features
      */
    constructor(){
        super();
        this._data = null;
    }
    set data(value){
        const oldValue = this._data;
        this._data=value;
        this.selected = value.isToday;
        this.requestUpdate('data', oldValue);
    }
    get data(){
        return this._data;
    }
    static get properties() {
        return {
            data:{type:Object},
            selected:{type:Boolean}
        };
    }
    getClass(){
        const selected = this.selected?"selected":""
        if(this.data.isToday){
            return `istoday ${selected}`
        }
       return !this.data.isCurrentMonth ? `notcurrentmonth ${selected}`:`${selected}`
        
        
    }
    render() {
        return html`
            <div class=${this.getClass()}>${this.data.date.getDate()}</div>
        `;
    }
    static get styles() {
        return css`
            div:not(.selected):hover{
               border:1px solid grey; 
            }
            div.selected:hover{
               border:1px solid blue; 
            }
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                width:100%;
                height:100%;
            }
            .notcurrentmonth{
                color:grey;
            }
            .istoday{
                background-color:blue;
                outline:2px blue solid;
                
            }
            .selected{
                border:1px blue solid;
            }
            .istoday:hover{
                outline-color:grey;
            }
            .istoday.selected{
                border:1px black solid;
            }
            
            :host{
                display: flex;
                align-self:center;
                justify-self:center;
                width:100%;
                height:100%;
            }
            `
    }
}
customElements.define("pss-day",Day);