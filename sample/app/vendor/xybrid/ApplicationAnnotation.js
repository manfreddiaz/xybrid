var xybrid;
(function (xybrid) {
    var ui;
    (function (ui) {
        function Application(namespace) {
            return function (target) {
                var dependencies = [];
                dependencies.push(createArtifactNamespaces(namespace));
                dependencies.push(createAnnotatedDependencies(target));
                angular.module(namespace, dependencies);
            };
        }
        ui.Application = Application;
        function createArtifactNamespaces(namespace) {
            return [namespace.concat('.controllers'), namespace.concat('.model'),
                namespace.concat('.services')];
        }
        function createAnnotatedDependencies(target) {
            return target.__dependencies;
        }
    })(ui = xybrid.ui || (xybrid.ui = {}));
})(xybrid || (xybrid = {}));
