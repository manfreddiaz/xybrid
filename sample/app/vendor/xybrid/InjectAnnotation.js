var xybrid;
(function (xybrid) {
    var ui;
    (function (ui) {
        function Inject(dependency) {
            return function (target, key, value) {
            };
        }
        ui.Inject = Inject;
    })(ui = xybrid.ui || (xybrid.ui = {}));
})(xybrid || (xybrid = {}));
