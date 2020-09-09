import timer from './timer.js'
import {CONFIG} from './config.js'
import PubSub from './pubsub.js'
import {chanel} from './chanel.js'
class TimerService{

    constructor(pubSub){
        this.pubSub=pubSub;
        this.interval = timer.setInterval(()=>{
            this.pub(new Date(Date.now()))
        },CONFIG.refreshTimer)
        
    }
    pub(date){
        this.pubSub.pub(chanel.CHANGEDATE,date);
    }
    dispose(){
        timer.clearInterval(this.interval)
    }

}

export default new TimerService( PubSub)