/**
 * Created by Manfred on 3/17/2015.
 */
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var controllers;
                (function (controllers) {
                    var Genre = com.ec.jobsity.angularchallange.domain.Genre;
                    var Controller = xybrid.ui.Controller;
                    var MovieController = (function () {
                        function MovieController(movie, StorageService, EnumService, $location, IndexingService) {
                            this.movie = movie;
                            this.storageService = StorageService;
                            this.angularLocationService = $location;
                            this.enumService = EnumService;
                            this.indexingService = IndexingService;
                            this.init();
                        }
                        MovieController.prototype.saveRating = function (value) {
                            this.movie.rating = value;
                            var lazyMovie = this.storageService.getLazy(this.movie.id);
                            lazyMovie.rating = this.movie.rating;
                            this.storageService.saveOrUpdate(lazyMovie);
                        };
                        MovieController.prototype.show = function () {
                        };
                        MovieController.prototype.create = function () {
                            if (this.movieForm.$valid) {
                                this.storageService.saveOrUpdate(this.movie);
                                this.angularLocationService.path('/');
                            }
                        };
                        MovieController.prototype.delete = function () {
                            this.storageService.remove(this.movie.id);
                            this.angularLocationService.path('/');
                        };
                        MovieController.prototype.init = function () {
                            var _this = this;
                            this.genres = this.enumService.getDisplayForEnum(Genre);
                            this.people = this.storageService.getAll('Person');
                            if (this.movie && this.movie.id) {
                                var moviesId = this.storageService.getAll('Movie').map(function (movie) { return movie.id; }).filter(function (value) {
                                    return value != _this.movie.id;
                                });
                                var similarMoviesCandidates = this.indexingService.searchSimilarMovies(this.movie.id, moviesId);
                                this.movie.similarMovies = [];
                                similarMoviesCandidates.forEach(function (candidateMovie) {
                                    console.log(candidateMovie.similarity);
                                    if (candidateMovie.similarity >= 0.60)
                                        _this.movie.similarMovies.push(_this.storageService.getLazy(candidateMovie.id));
                                });
                            }
                        };
                        MovieController = Controller('MovieController')(MovieController) || MovieController;
                        return MovieController;
                    })();
                    controllers.MovieController = MovieController;
                })(controllers = angularchallange.controllers || (angularchallange.controllers = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=MovieController.js.map