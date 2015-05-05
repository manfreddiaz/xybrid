module com.ec.jobsity.angularchallange.controllers {
    import Movie = com.ec.jobsity.angularchallange.domain.Movie
    import Person = com.ec.jobsity.angularchallange.domain.Person
    import StorageService = com.ec.jobsity.angularchallange.services.StorageService
    import Controller = xybrid.ui.Controller

    @Controller('HomeController')
    export class HomeController {
        movies: Movie[]
        actors: Person[]
        private storageService: StorageService

        constructor(StorageService: StorageService) {
            this.storageService = StorageService;
            this.init()
        }

        private init() {
            this.movies = this.storageService.getAll<Movie>('Movie')
            this.actors = this.storageService.getAll<Person>('Person')
        }
    }
}
