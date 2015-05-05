/**
 * Created by Manfred on 3/16/2015.
 */
module com.ec.jobsity.angularchallange.domain {
    
    export class AbstractModel {
        id : string
        type: string
        constructor(type: string) {
            this.type = type
        }
        static get(id: string) {

        }
    }
}
