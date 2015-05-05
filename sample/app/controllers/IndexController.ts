/**
 * Created by Manfred on 3/20/2015.
 */

module com.ec.jobsity.angularchallange.controllers {
    import Controller = xybrid.ui.Controller

    @Controller('IndexController')
    export class IndexController {
        private locationProvider: ng.ILocationService

        constructor($location: ng.ILocationService) {
            this.locationProvider = $location
        }

        isActiveLink(currentLocation): boolean {
            return currentLocation == this.locationProvider.path()
        }
    }
}
