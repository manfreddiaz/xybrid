/**
 * Created by Manfred on 3/16/2015.
 */
var __decorate = this.__decorate || function (decorators, target, key, value) {
    var kind = typeof (arguments.length == 2 ? value = target : value);
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        switch (kind) {
            case "function": value = decorator(value) || value; break;
            case "number": decorator(target, key, value); break;
            case "undefined": decorator(target, key); break;
            case "object": value = decorator(target, key, value) || value; break;
        }
    }
    return value;
};
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var Application = xybrid.ui.Application;
                var DependsOn = xybrid.ui.DependsOn;
                var Inject = xybrid.ui.Inject;
                var ChallangeApplication = (function () {
                    function ChallangeApplication() {
                    }
                    ChallangeApplication.prototype.run = function (indexingService, storageService) {
                    };
                    Object.defineProperty(ChallangeApplication.prototype, "run", __decorate([Inject('IndexingService'), Inject('StorageService')], ChallangeApplication.prototype, "run", Object.getOwnPropertyDescriptor(ChallangeApplication.prototype, "run")));
                    ChallangeApplication = __decorate([DependsOn('ui.bootstrap'), DependsOn('ui.date'), DependsOn('ngRoute'), DependsOn('ngSanitize'), DependsOn('ui.select'), DependsOn('toaster'), Application('com.ec.jobsity.angularchallange')], ChallangeApplication);
                    return ChallangeApplication;
                })();
                angularchallange.ChallangeApplication = ChallangeApplication;
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
