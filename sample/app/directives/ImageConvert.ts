/**
 * Created by Manfred on 3/19/2015.
 */
///<reference path="../../lib/typings/def.d.ts"/>

//Depends on Blueimp loadImage library
module com.ec.jobsity.angularchallange.directives {

    export var ImageConvert = () =>  {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: ($scope: ng.IScope, el , attrs, ngModel: ng.INgModelController) => {
                el.on('change', (event: BaseJQueryEventObject) => {
                    var files = (<HTMLInputElement>event.target).files

                    var file = files[0]

                    loadImage(
                        file,
                        (image: HTMLCanvasElement) => {
                            ngModel.$setViewValue(image.toDataURL())
                            $scope.$apply()

                        },
                        {
                            maxWidth: 100,
                            maxHeight: 100,
                            canvas: true
                        }
                    )
                })
            }
        }
    }
}