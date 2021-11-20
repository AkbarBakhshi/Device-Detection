import Detection from 'classes/detection'

export default class Home {
    constructor() {
    }
    create() {
        if(Detection.isDesktop()) {
            console.log('desktop')
        }
    }
}