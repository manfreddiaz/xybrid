/**
 * Created by Manfred on 3/20/2015.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var services;
                (function (services) {
                    var Service = xybrid.ui.Service;
                    var IndexingService = (function () {
                        function IndexingService() {
                            this.index = lunr(LunrConfig);
                        }
                        IndexingService.prototype.search = function (term) {
                            var results = [];
                            var matches = this.index.search(term);
                            var document;
                            matches.forEach(function (index) {
                                results.push(index.ref);
                            });
                            return results;
                        };
                        IndexingService.prototype.searchSimilarMovies = function (id, comparers) {
                            var _this = this;
                            var baseVector = this.index.documentVector(id);
                            var comparersVectors = [];
                            var measures = [];
                            comparers.forEach(function (ref) {
                                comparersVectors.push({ id: ref, vector: _this.index.documentVector(ref) });
                            });
                            comparersVectors.forEach(function (comparer) {
                                measures.push({ id: comparer.id, similarity: comparer.vector.similarity(baseVector) });
                            });
                            return measures;
                        };
                        IndexingService.prototype.createIndexFor = function (model) {
                            switch (model.type) {
                                case 'Movie':
                                    this.index.add(this.createDocumentFromMovie(model));
                                    break;
                                case 'Person':
                                    this.index.add(this.createDocumentFromPerson(model));
                                    break;
                                default:
                                    throw new Error();
                            }
                        };
                        IndexingService.prototype.updateIndexFor = function (model) {
                            switch (model.type) {
                                case 'Movie':
                                    this.index.update(this.createDocumentFromMovie(model));
                                    break;
                                case 'Person':
                                    this.index.update(this.createDocumentFromPerson(model));
                                    break;
                                default:
                                    throw new Error();
                            }
                        };
                        IndexingService.prototype.deleteIndexFor = function (model) {
                            switch (model.type) {
                                case 'Movie':
                                    this.index.remove(this.createDocumentFromMovie(model));
                                    break;
                                case 'Person':
                                    this.index.remove(this.createDocumentFromPerson(model));
                                    break;
                                default:
                                    throw new Error();
                            }
                        };
                        IndexingService.prototype.createDocumentFromMovie = function (movie) {
                            return {
                                id: movie.id,
                                type: movie.type,
                                name: movie.name,
                                description: movie.description,
                                additional: movie.cast.map(function (person) {
                                    return person.firstName.concat(' ', person.lastName);
                                }).join(' ')
                            };
                        };
                        IndexingService.prototype.createDocumentFromPerson = function (person) {
                            return {
                                id: person.id,
                                type: person.type,
                                name: person.firstName + ' ' + person.lastName,
                                description: '',
                                additional: ''
                            };
                        };
                        IndexingService = Service('IndexingService')(IndexingService) || IndexingService;
                        return IndexingService;
                    })();
                    services.IndexingService = IndexingService;
                    var LunrConfig = (function (_super) {
                        __extends(LunrConfig, _super);
                        function LunrConfig() {
                            _super.call(this);
                            this.ref('id');
                            this.field('type');
                            this.field('name');
                            this.field('description');
                            this.field('additional');
                        }
                        return LunrConfig;
                    })(lunr.Index);
                })(services = angularchallange.services || (angularchallange.services = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=IndexingService.js.map