(function(){
angular.module('UsersService', [])
    .factory('UsersService', ['$http', UsersService]);

function UsersService($http) {
    var users = {};
    var userNo = 0;

    users.getAllUsers = getAllUsers;
    users.getUserByLogin = getUserByLogin;


    function getAllUsers() {
        return $http.get('https://api.github.com/users');

    };
    function getUserByLogin(login) {
        return $http.get('https://api.github.com/users/' + login);
    }

    return users;
}
})()