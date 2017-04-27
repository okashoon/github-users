describe('UserDetailsController', function () {
  var controller;
  

  beforeEach(module('UserDetailsCtrl'));
  beforeEach(module(function($provide){
    $provide.value('user',{data:{login:"ahmed"}});
  }));

  


  it('User must load before controller instantiation', inject(function ($controller,user) {
    
    var ctrl = $controller('UserDetailsCtrl',{user:user})

    expect(ctrl.user.login).toEqual("ahmed");
    
  }));



});
