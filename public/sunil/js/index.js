
var app=angular.module('app',['ngRoute','ngCookies']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'register.html',
            controller : 'default'
        })
        .when('/login', {
            templateUrl : 'login.html',
            controller : 'login'
        })
        .when('/admin', {
            templateUrl : 'admin.html',
            controller : 'admin'
        })


});


