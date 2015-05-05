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
                    var EnumService = (function () {
                        function EnumService() {
                        }
                        EnumService.prototype.getDisplayForEnum = function (Type) {
                            var display = [];
                            var length = Object.keys(Type).length / 2;
                            for (var i = 0; i < length; i++) {
                                display.push({
                                    value: i,
                                    label: Type[i]
                                });
                            }
                            return display;
                        };
                        EnumService = Service('EnumService')(EnumService) || EnumService;
                        return EnumService;
                    })();
                    services.EnumService = EnumService;
                })(services = angularchallange.services || (angularchallange.services = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=EnumService.js.map