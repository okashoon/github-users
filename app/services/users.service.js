angular.module('usersService', [])
    .factory('usersService', ['$http', function usersService($http) {
        var users = {};
        users.getAllUsers = function() {
            return $http.get('https://api.github.com/users');
        }
        return users;
    }]);