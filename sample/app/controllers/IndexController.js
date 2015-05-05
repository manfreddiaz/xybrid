/**
 * Created by Manfred on 3/20/2015.
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
                    var Controller = xybrid.ui.Controller;
                    var IndexController = (function () {
                        function IndexController($location) {
                            this.locationProvider = $location;
                        }
                        IndexController.prototype.isActiveLink = function (currentLocation) {
                            return currentLocation == this.locationProvider.path();
                        };
                        IndexController = Controller('IndexController')(IndexController) || IndexController;
                        return IndexController;
                    })();
                    controllers.IndexController = IndexController;
                })(controllers = angularchallange.controllers || (angularchallange.controllers = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=IndexController.js.map