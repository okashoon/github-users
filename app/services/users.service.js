(function () {
    angular.module('UsersService', [])
        .factory('UsersService', UsersService);

    UsersService.$inject= ['$http'];

    function UsersService($http) {
        var service = {
            getAllUsers: getAllUsers,
            getUserByLogin: getUserByLogin
        };

        return service;

        function getAllUsers() {
            return $http.get('https://api.github.com/users');
        };

        function getUserByLogin(login) {
            return $http.get('https://api.github.com/users/' + login);
        };
    }
})()