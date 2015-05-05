var xybrid;
(function (xybrid) {
    var ui;
    (function (ui) {
        function Model(target) {
            var domainModule;
            try {
                domainModule = angular.module("com.ec.jobsity.angularchallange.model");
            }
            catch (error) {
                domainModule = angular.module("com.ec.jobsity.angularchallange.model", []);
            }
            domainModule.value(target);
        }
        ui.Model = Model;
        var ModelMixin = (function () {
            function ModelMixin() {
            }
            return ModelMixin;
        })();
    })(ui = xybrid.ui || (xybrid.ui = {}));
})(xybrid || (xybrid = {}));
//# sourceMappingURL=ModelAnnotation.js.map