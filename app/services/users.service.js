angular.module('UsersService', [])
    .factory('UsersService', ['$http', function UsersService($http) {
        var users = {};
        var userNo = 0;
        users.getAllUsers = function() {
            return $http.get('https://api.github.com/users');

        };

        return users;
    }]);