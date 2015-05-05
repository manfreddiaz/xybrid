/**
 * Created by Manfred on 3/19/2015.
 */
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
                    var NotificationService = (function () {
                        function NotificationService(toaster) {
                            this.toasterService = toaster;
                        }
                        NotificationService.prototype.error = function (title, text) {
                            this.toasterService.pop('error', title, text);
                        };
                        NotificationService = Service('NotificationService')(NotificationService) || NotificationService;
                        return NotificationService;
                    })();
                    services.NotificationService = NotificationService;
                })(services = angularchallange.services || (angularchallange.services = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=NotificationService.js.map