(function(){
angular.module('UserDetailsCtrl', []).
controller('UserDetailsCtrl', UserDetailsCtrl);

UserDetailsCtrl.$inject = ['user'];

function UserDetailsCtrl(user) {
    //user comes from resolve ui-router
    this.user = user.data;
}
})()