/*** Created by abc on 27/05/2016.*/8828299466
var app=angular.module('app');

app.controller("default",['$scope','$cookies','$window', function($scope,$cookies,$window){

    $scope.submitdata=function(){
        $cookies.putObject($scope.user.email, $scope.user);
        $window.location.reload();
        console.log("email");
    };
}]);




app.controller("login", function($scope,$cookies,$window){

    $scope.login=function () {
        if($scope.user.email==='sunil@gmail.com'){
            $cookies.putObject('email', $scope.user);
            window.location.replace('#/admin');
        }else{
            window.location.replace('#/login');
            console.log("INVALID LOGIN ID");
        }
    };


});

app.controller("admin", function($scope){

});

