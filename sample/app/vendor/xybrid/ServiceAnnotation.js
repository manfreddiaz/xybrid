var xybrid;
(function (xybrid) {
    var ui;
    (function (ui) {
        function Service(name) {
            return function (target) {
                var serviceModule;
                try {
                    serviceModule = angular.module("com.ec.jobsity.angularchallange.services");
                }
                catch (error) {
                    serviceModule = angular.module("com.ec.jobsity.angularchallange.services", []);
                }
                serviceModule.service(name, target);
            };
        }
        ui.Service = Service;
        function Transactional(target, member, value) {
        }
        ui.Transactional = Transactional;
        var ServiceMixin = (function () {
            function ServiceMixin() {
            }
            return ServiceMixin;
        })();
    })(ui = xybrid.ui || (xybrid.ui = {}));
})(xybrid || (xybrid = {}));
//# sourceMappingURL=ServiceAnnotation.js.map