angular.module('app').
config(function($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        template: '<b>{{name}}</b>'

    };
    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<p>about state</p>'
    };

    var usersState = {
        name: 'users',
        urls: '/users',
        templateUrl: './users/users-list.html',
        controller: 'UsersListCtrl'
    }
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(usersState);

})