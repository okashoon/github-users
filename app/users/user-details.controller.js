angular.module('UserDetailsCtrl', []).
controller('UserDetailsCtrl', function UserDetailsCtrl(user) {
    this.user = user;
})