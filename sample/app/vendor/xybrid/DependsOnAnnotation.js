var xybrid;
(function (xybrid) {
    var ui;
    (function (ui) {
        function DependsOn(name) {
            return function (target) {
                if (target.__dependencies)
                    target.__dependencies = [];
                target.__dependencies.push(name);
            };
        }
        ui.DependsOn = DependsOn;
    })(ui = xybrid.ui || (xybrid.ui = {}));
})(xybrid || (xybrid = {}));
