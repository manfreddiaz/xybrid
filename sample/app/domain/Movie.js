var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Manfred on 3/16/2015.
 */
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var domain;
                (function (domain) {
                    var Model = xybrid.ui.Model;
                    var Movie = (function (_super) {
                        __extends(Movie, _super);
                        function Movie() {
                            _super.call(this, 'Movie');
                            this.directors = [];
                            this.cast = [];
                            this.similarMovies = [];
                        }
                        Movie.hasMany = {
                            cast: 'Person',
                            directors: 'Person',
                            genres: 'Genre'
                        };
                        Movie = Model(Movie) || Movie;
                        return Movie;
                    })(domain.AbstractModel);
                    domain.Movie = Movie;
                })(domain = angularchallange.domain || (angularchallange.domain = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=Movie.js.map