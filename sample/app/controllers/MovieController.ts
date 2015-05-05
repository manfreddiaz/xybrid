/**
 * Created by Manfred on 3/17/2015.
 */
module com.ec.jobsity.angularchallange.controllers {
    import Movie = com.ec.jobsity.angularchallange.domain.Movie
    import Genre = com.ec.jobsity.angularchallange.domain.Genre
    import Person = com.ec.jobsity.angularchallange.domain.Person
    import StorageService = com.ec.jobsity.angularchallange.services.StorageService
    import EnumService = com.ec.jobsity.angularchallange.services.EnumService
    import IndexingService = com.ec.jobsity.angularchallange.services.IndexingService
    import Controller = xybrid.ui.Controller

    @Controller('MovieController')
    export class MovieController {
        movie: Movie
        movieForm: ng.IFormController
        genres: any;
        people: any;
        private storageService: StorageService
        private angularLocationService: ng.ILocationService
        private enumService: EnumService
        private indexingService: IndexingService

        constructor(movie: Movie, StorageService: StorageService, EnumService: EnumService, $location: ng.ILocationService, IndexingService: IndexingService) {
            this.movie = movie
            this.storageService = StorageService;
            this.angularLocationService = $location
            this.enumService = EnumService
            this.indexingService = IndexingService
            this.init()
        }
        saveRating(value) {
            this.movie.rating = value
            var lazyMovie = this.storageService.getLazy<Movie>(this.movie.id)
            lazyMovie.rating = this.movie.rating
            this.storageService.saveOrUpdate(lazyMovie)
        }
        show() {

        }
        create() {
            if(this.movieForm.$valid) {
                this.storageService.saveOrUpdate(this.movie)
                this.angularLocationService.path('/')
            }
        }
        delete() {
            this.storageService.remove(this.movie.id)
            this.angularLocationService.path('/')
        }

        init() {
            this.genres = this.enumService.getDisplayForEnum(Genre)
            this.people = this.storageService.getAll<Person>('Person')
            if(this.movie && this.movie.id) {
                var moviesId = this.storageService.getAll('Movie').map((movie) => {return movie.id }).filter((value: string) => {
                    return value != this.movie.id
                })
                var similarMoviesCandidates: {id: string; similarity: number}[] = this.indexingService.searchSimilarMovies(this.movie.id, moviesId)

                this.movie.similarMovies = []
                similarMoviesCandidates.forEach((candidateMovie) => {
                    console.log(candidateMovie.similarity)
                    if(candidateMovie.similarity >= 0.60) //Ajustable according to sample data.
                        this.movie.similarMovies.push(<Movie>this.storageService.getLazy(candidateMovie.id))
                })

            }
        }
    }
}
