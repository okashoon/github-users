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
        url: '/users',
        templateUrl: './users/users-list.html',
        controller: 'UsersListCtrl',
        controllerAs: 'vm',
        data: {
            css: ['./users/users-list.css']
        },
        resolve: {
            users: function(UsersService) {
                return UsersService.getAllUsers();
            }
        }
    }

    var userDetailsState = {
        name: 'users.details',
        url: '/{userLogin}',
        templateUrl: './users/user-details.html',
        controller: 'UserDetailsCtrl',
        controllerAs: 'vm',
        resolve: {
            user: function(UsersService, $stateParams) {
                return UsersService.getUserByLogin($stateParams.userLogin);
            }
        }
    }
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(usersState);
    $stateProvider.state(userDetailsState);

})