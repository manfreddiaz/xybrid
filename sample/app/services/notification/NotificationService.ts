/**
 * Created by Manfred on 3/19/2015.
 */

module com.ec.jobsity.angularchallange.services {
    interface ToasterService {
        pop(type: string, title: string, text: string)
    }
    import Service = xybrid.ui.Service

    @Service('NotificationService')
    export class NotificationService {

        private toasterService: ToasterService

        constructor(toaster: ToasterService) {
            this.toasterService = toaster
        }

        error(title: string, text: string) {
            this.toasterService.pop('error', title, text)
        }
    }
}
