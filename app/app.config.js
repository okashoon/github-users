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
        resolve: {
            users: function(UsersService) {
                return UsersService.getAllUsers();
            }
        }
    }

    var userDetailsState = {
        name: 'users.details',
        url: '/{userId}',
        templateUrl: './users/user-details.html',
        controller: 'UserDetailsCtrl',
        controllerAs: 'vm',
        resolve: {
            user: function(users, $stateParams) {
                return users.data.find(function(user) {
                    return user.id == $stateParams.userId;
                })
            }
        }
    }
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(usersState);
    $stateProvider.state(userDetailsState);

})