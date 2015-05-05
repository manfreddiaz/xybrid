/**
 * Created by Manfred on 3/20/2015.
 */
var __decorate = this.__decorate || function (decorators, target, key, value) {
    var kind = typeof (arguments.length == 2 ? value = target : value);
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        switch (kind) {
            case "function": value = decorator(value) || value; break;
            case "number": decorator(target, key, value); break;
            case "undefined": decorator(target, key); break;
            case "object": value = decorator(target, key, value) || value; break;
        }
    }
    return value;
};
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
                    var Controller = xybrid.ui.Controller;
                    var SearchController = (function () {
                        function SearchController(term, IndexingService, StorageService) {
                            this.term = term;
                            this.indexingService = IndexingService;
                            this.storageService = StorageService;
                            this.results = [];
                            this.init();
                        }
                        SearchController.prototype.init = function () {
                            var _this = this;
                            var ids = this.indexingService.search(this.term);
                            if (ids && ids.length > 0) {
                                ids.forEach(function (id) {
                                    _this.results.push(_this.storageService.get(id));
                                });
                            }
                        };
                        SearchController = __decorate([Controller('SearchController')], SearchController);
                        return SearchController;
                    })();
                    controllers.SearchController = SearchController;
                })(controllers = angularchallange.controllers || (angularchallange.controllers = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
