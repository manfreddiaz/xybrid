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
                    var HomeController = (function () {
                        function HomeController(StorageService) {
                            this.storageService = StorageService;
                            this.init();
                        }
                        HomeController.prototype.init = function () {
                            this.movies = this.storageService.getAll('Movie');
                            this.actors = this.storageService.getAll('Person');
                        };
                        HomeController = Controller('HomeController')(HomeController) || HomeController;
                        return HomeController;
                    })();
                    controllers.HomeController = HomeController;
                })(controllers = angularchallange.controllers || (angularchallange.controllers = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=HomeController.js.map