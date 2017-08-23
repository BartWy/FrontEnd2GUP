var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
   .when('/',{ 
        templateUrl: './views/main.html'

   })
   .when('/add',{
        templateUrl: './views/add.html',
        controller:'first'
    })
    .when('/show',{
        templateUrl: './views/show.html',
        controller:'second'
    })
    
    .when('/delete/:id',{
        template:'',
        controller: 'deleteMovieController'
    })

});

app.service('movie', function () {
    this.movies = [];
    this.counter = this.movis.length +1;
    this.add = function (movie) {
        movie.id = this.counter++;
        this.movies.push(movie);
    }
    this.get = function () {
        return this.movies;
    }
    this.deleteById = function(id) {
         for(var i = 0; i < this.movies.length; i++) {
             if(this.movies[i].id == id) {
                 break;
             }
         }
         this.movies.splice(i, 1);
    }
});

app.controller('first', function ($scope, movie) {
    $scope.add = function () {
        movie.add({ title: $scope.movie,  year: $scope.year,  type: $scope.type});
      
    }

});

app.controller('second', function ($scope, movie) {
    $scope.movies = movie.get();
    $scope.delete = function(id) {
    movie.deleteById(id);
    };
    

});

app.controller('deleteMovieController', function($scope, $routeParams, movie, $location) {
   movie.deleteById($routeParams.id);
   $location.path('/show');
 }); 





