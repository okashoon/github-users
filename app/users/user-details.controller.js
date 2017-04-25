(function(){
angular.module('UserDetailsCtrl', []).
controller('UserDetailsCtrl', ['user',UserDetailsCtrl]);

function UserDetailsCtrl(user) {
    //user comes from resolve ui-router
    this.user = user.data;
}
})()