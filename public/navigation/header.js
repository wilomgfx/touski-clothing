angular.module('TouskiClothingApp.headerNav', [])
.controller('HeaderNavController', HeaderNavController)
.directive('headernav', HeaderNav);


function HeaderNavController($scope) {


};

function HeaderNav () {

    return {

        restrict: "E",
        templateUrl: "public/navigation/header.html",
        controller: 'HeaderNavController'
    };
};
