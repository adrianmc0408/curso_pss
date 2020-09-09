export class PubSub {
    constructor() {

        this.suscriptors = new Map();
    }
    pub(chanel, data) {
        const suscriptors = this.suscriptors.get(chanel);
        (suscriptors || []).forEach(cb=>{
            cb(data)
        })
    }
    sub(chanel, cb) {
        let suscriptors = this.suscriptors.get(chanel);
        if (!suscriptors) {
            suscriptors = [cb]
            this.suscriptors.set(chanel, suscriptors)
        }
        else {
            suscriptors.push(cb)
        }
        return () => {
            let index = suscriptors.indexOf(cb);
            if (index !== -1) {
                suscriptors.splice(index, 1)
            }
        }
    }
}

export default new PubSub();