angular.module('app').
    config(function ($stateProvider) {
        var homeState = {
            name: 'home',
            url: '/home',
            template: '<h1>Home Page</h1>'

        };
        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h1>about Page</h1>'
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
                users: getUsers
            }
        }

        getUsers.$inject = ['UsersService'];
        function getUsers(UsersService) {
            return UsersService.getAllUsers();
        }

        var userDetailsState = {
            name: 'users.details',
            url: '/{userLogin}',
            templateUrl: './users/user-details.html',
            controller: 'UserDetailsCtrl',
            controllerAs: 'vm',
            resolve: {
                user: getUser
            }
        }

        getUser.$inject = ['UsersService', '$stateParams'];
        function getUser(UsersService, $stateParams) {
            return UsersService.getUserByLogin($stateParams.userLogin);
        }

        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(usersState);
        $stateProvider.state(userDetailsState);

    }).run(function ($rootScope,$location){
    
    //ToDo redirect when url is wrong
    $rootScope.$on('$stateChangeError',
        function(event, current, previous, rejection) {
           console.log('err');
           $location.path('/home')
            

        }
    );
})