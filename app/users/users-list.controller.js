angular.module('usersListCtrl', []).
controller('UsersListCtrl', ['users', 'usersService', UsersListCtrl])

function UsersListCtrl(users, usersService) {

    this.users = users.data;

    this.usersCount = 5;
    this.loadMoreUsers = function() {
        this.usersCount += 5;
    }

    // usersService.getAllUsers().then(function(response) {
    //     //users = response.data;
    //     //console.log(response.data)
    // })
}



// ['users', function UsersListCtrl(users) {

//     console.log(users.data);
//     // usersService.getAllUsers().then(function(response) {
//     //     //users = response.data;
//     //     //console.log(response.data)
//     // })
// }]