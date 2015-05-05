/**
 * Created by Manfred on 3/16/2015.
 */

module com.ec.jobsity.angularchallange {
    import IndexingService = com.ec.jobsity.angularchallange.services.IndexingService
    import StorageService = com.ec.jobsity.angularchallange.services.StorageService
    import Application = xybrid.ui.Application
    import DependsOn = xybrid.ui.DependsOn
    import Inject = xybrid.ui.Inject

    @DependsOn('ui.bootstrap')
    @DependsOn('ui.date')
    @DependsOn('ngRoute')
    @DependsOn('ngSanitize')
    @DependsOn('ui.select')
    @DependsOn('toaster')
    @Application('com.ec.jobsity.angularchallange')
    export class ChallangeApplication {

        @Inject('IndexingService')
        @Inject('StorageService')
        public run(indexingService: IndexingService, storageService: StorageService) {

        }
    }
}
