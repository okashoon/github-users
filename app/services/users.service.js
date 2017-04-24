angular.module('usersService', [])
    .factory('usersService', ['$http', function usersService($http) {
        var users = {};
        var userNo = 0;
        users.getAllUsers = function() {
            return $http.get('https://api.github.com/users');

        };

        return users;
    }]);