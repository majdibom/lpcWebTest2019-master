'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        PotsService.get().success(function(response) {
            $scope.pots = response;
        })
    }]);
