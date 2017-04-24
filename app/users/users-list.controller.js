angular.module('UsersListCtrl', ['usersService']).
controller('UsersListCtrl', function UsersListCtrl($scope, usersService) {
    $scope.name = "ahmed";
    usersService.getAllUsers().then(function(response) {
        console.log(response.data)
    })
})