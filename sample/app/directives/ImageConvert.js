/**
 * Created by Manfred on 3/19/2015.
 */
///<reference path="../../lib/typings/def.d.ts"/>
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var directives;
                (function (directives) {
                    directives.ImageConvert = function () {
                        return {
                            require: 'ngModel',
                            restrict: 'A',
                            link: function ($scope, el, attrs, ngModel) {
                                el.on('change', function (event) {
                                    var files = event.target.files;
                                    var file = files[0];
                                    loadImage(file, function (image) {
                                        ngModel.$setViewValue(image.toDataURL());
                                        $scope.$apply();
                                    }, {
                                        maxWidth: 100,
                                        maxHeight: 100,
                                        canvas: true
                                    });
                                });
                            }
                        };
                    };
                })(directives = angularchallange.directives || (angularchallange.directives = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
