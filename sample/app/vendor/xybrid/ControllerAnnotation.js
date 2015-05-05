var xybrid;
(function (xybrid) {
    var ui;
    (function (ui) {
        function Controller(name) {
            return function (target) {
                var controllersModule;
                try {
                    controllersModule = angular.module("com.ec.jobsity.angularchallange.controllers");
                }
                catch (error) {
                    controllersModule = angular.module("com.ec.jobsity.angularchallange.controllers", []);
                }
                controllersModule.controller(name, target);
            };
        }
        ui.Controller = Controller;
        var ControllerMixin = (function () {
            function ControllerMixin() {
            }
            return ControllerMixin;
        })();
    })(ui = xybrid.ui || (xybrid.ui = {}));
})(xybrid || (xybrid = {}));
//# sourceMappingURL=ControllerAnnotation.js.map