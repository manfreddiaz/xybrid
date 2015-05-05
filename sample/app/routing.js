/**
 * Created by Manfred on 3/17/2015.
 */
///<reference path="../lib/typings/def.d.ts" />
///<reference path="./index.ts" />
///<reference path="../app/domain/Movie.ts" />
///<reference path="services/persistence/StorageService.ts"/>
var Movie = com.ec.jobsity.angularchallange.domain.Movie;
var Person = com.ec.jobsity.angularchallange.domain.Person;
var StorageService = com.ec.jobsity.angularchallange.services.StorageService;
com.ec.jobsity.angularchallange.application.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeController as vm',
        templateUrl: 'views/home/index.html'
    });
    $routeProvider.when('', {
        controller: 'HomeController as vm',
        templateUrl: 'views/home/index.html'
    });
    $routeProvider.when('/actors', {
        controller: 'HomeController as vm',
        templateUrl: 'views/home/actors.html'
    });
    $routeProvider.when('/movie/create', {
        controller: 'MovieController as vm',
        templateUrl: 'views/movie/create.html',
        resolve: {
            movie: function () {
                return new Movie();
            }
        }
    });
    $routeProvider.when('/movie/show/:id', {
        controller: 'MovieController as vm',
        templateUrl: 'views/movie/show.html',
        resolve: {
            movie: function ($route, StorageService) {
                return StorageService.get($route.current.params.id, 'Movie');
            }
        }
    });
    $routeProvider.when('/movie/edit/:id', {
        controller: 'MovieController as vm',
        templateUrl: 'views/movie/create.html',
        resolve: {
            movie: function ($route, StorageService) {
                return StorageService.getLazy($route.current.params.id);
            }
        }
    });
    $routeProvider.when('/actor/create', {
        controller: 'ActorController as vm',
        templateUrl: 'views/actor/create.html',
        resolve: {
            actor: function () {
                return new Person();
            }
        }
    });
    $routeProvider.when('/actor/show/:id', {
        controller: 'ActorController as vm',
        templateUrl: 'views/actor/show.html',
        resolve: {
            actor: function ($route, StorageService) {
                return StorageService.get($route.current.params.id, 'Person');
            }
        }
    });
    $routeProvider.when('/actor/edit/:id', {
        controller: 'ActorController as vm',
        templateUrl: 'views/actor/create.html',
        resolve: {
            actor: function ($route, StorageService) {
                return StorageService.getLazy($route.current.params.id);
            }
        }
    });
    $routeProvider.when('/search', {
        controller: 'SearchController as vm',
        templateUrl: 'views/search/index.html',
        resolve: {
            term: function ($route) {
                return $route.current.params.term;
            }
        }
    });
    $routeProvider.otherwise({
        templateUrl: '404.html'
    });
});
