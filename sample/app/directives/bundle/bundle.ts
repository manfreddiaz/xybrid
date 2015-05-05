/**
 * Created by Manfred on 3/18/2015.
 */
/// <reference path="../../../lib/typings/def.d.ts"/>
/// <reference path="../ImageConvert.ts"/>

module com.ec.jobsity.angularchallange.directives {
    directives['_module'] = angular.module('com.ec.jobsity.angularchallange.directives', [])
                                   .directive('ngImage', ImageConvert)
}