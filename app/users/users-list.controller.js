(function () {
    angular.module('UsersListCtrl', []).
        controller('UsersListCtrl', UsersListCtrl);

    UsersListCtrl.$inject = ['users', '$state'];

    function UsersListCtrl(users, $state) {

        this.a = 3;

        //users from resolve ui-router
        this.users = users.data;

        //display first user details by default
        $state.go("users.details", { userLogin: this.users[0].login });

        //to only display 5 users initially and add 5 when clicking load more
        this.usersCount = 5;
        this.loadMoreUsers = function () {
            this.usersCount += 5;
        }
    }
})()