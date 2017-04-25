angular.module('UsersListCtrl', []).
controller('UsersListCtrl', ['users','$state', UsersListCtrl])

function UsersListCtrl(users,$state) {


    this.users = users.data;

    $state.go("users.details",{userLogin: this.users[0].login});

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