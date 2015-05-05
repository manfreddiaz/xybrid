/**
 * Created by Manfred on 3/17/2015.
 */
///<reference path="../lib/typings/def.d.ts" />
///<reference path="./index.ts" />
///<reference path="../app/domain/Movie.ts" />
///<reference path="services/persistence/StorageService.ts"/>

import Movie = com.ec.jobsity.angularchallange.domain.Movie
import Person = com.ec.jobsity.angularchallange.domain.Person
import StorageService = com.ec.jobsity.angularchallange.services.StorageService

com.ec.jobsity.angularchallange.application.config(($routeProvider: ng.route.IRouteProvider) => {

    $routeProvider.when('/', {
        controller: 'HomeController as vm',
        templateUrl: 'views/home/index.html'
    })
    $routeProvider.when('', {
        controller: 'HomeController as vm',
        templateUrl: 'views/home/index.html'
    })
    $routeProvider.when('/actors', {
        controller: 'HomeController as vm',
        templateUrl: 'views/home/actors.html'
    })
    $routeProvider.when('/movie/create',{
        controller: 'MovieController as vm',
        templateUrl: 'views/movie/create.html',
        resolve: {
            movie: () => {
                return new Movie()
            }
        }
    })
    $routeProvider.when('/movie/show/:id',{
        controller: 'MovieController as vm',
        templateUrl: 'views/movie/show.html',
        resolve: {
            movie: ($route: ng.route.IRouteService, StorageService: StorageService) => {
                return StorageService.get($route.current.params.id, 'Movie')
            }
        }
    })
    $routeProvider.when('/movie/edit/:id',{
        controller: 'MovieController as vm',
        templateUrl: 'views/movie/create.html',
        resolve: {
            movie: ($route: ng.route.IRouteService, StorageService: StorageService) => {
                return StorageService.getLazy($route.current.params.id)
            }
        }
    })
    $routeProvider.when('/actor/create',{
        controller: 'ActorController as vm',
        templateUrl: 'views/actor/create.html',
        resolve: {
            actor: () => {
                return new Person()
            }
        }
    })
    $routeProvider.when('/actor/show/:id',{
        controller: 'ActorController as vm',
        templateUrl: 'views/actor/show.html',
        resolve: {
            actor: ($route: ng.route.IRouteService, StorageService: StorageService) => {
                return StorageService.get($route.current.params.id, 'Person')
            }
        }
    })
    $routeProvider.when('/actor/edit/:id',{
        controller: 'ActorController as vm',
        templateUrl: 'views/actor/create.html',
        resolve: {
            actor: ($route: ng.route.IRouteService, StorageService: StorageService) => {
                return StorageService.getLazy($route.current.params.id)
            }
        }
    })
    $routeProvider.when('/search', {
        controller: 'SearchController as vm',
        templateUrl: 'views/search/index.html',
        resolve: {
            term: ($route: ng.route.IRouteService) => {
                return $route.current.params.term
            }
        }
    })
    $routeProvider.otherwise({
        templateUrl: '404.html'
    })
})