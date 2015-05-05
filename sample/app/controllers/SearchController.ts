/**
 * Created by Manfred on 3/20/2015.
 */

module com.ec.jobsity.angularchallange.controllers {
    import IndexingService = com.ec.jobsity.angularchallange.services.IndexingService
    import StorageService = com.ec.jobsity.angularchallange.services.StorageService
    import AbstractModel = com.ec.jobsity.angularchallange.domain.AbstractModel
    import Controller = xybrid.ui.Controller

    @Controller('SearchController')
    export class SearchController {

        private indexingService: IndexingService
        private storageService: StorageService

        results: AbstractModel[]

        constructor(public term: string, IndexingService: IndexingService, StorageService: StorageService) {
            this.indexingService = IndexingService;
            this.storageService = StorageService
            this.results = []
            this.init()
        }

        private init() {
            var ids = this.indexingService.search(this.term)
            if(ids && ids.length > 0) {
                ids.forEach((id: string) => {
                    this.results.push(this.storageService.get(id))
                })
            }
        }
    }
}
