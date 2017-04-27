

describe('UsersListController', function () {
  var controller;
  

  beforeEach(module('ui.router'));
  beforeEach(module('UsersListCtrl'));
  beforeEach(module(function($provide){
    $provide.value('users',{data:[{name:"ahmed"},{name:"wael"}]});
  }));

  


  it('Users must load before controller instantiation', inject(function ($controller,users,$state) {
    //verify if go method is called by $state
    spyOn($state, 'go');
    expect($state.go).toBeDefined;
    var ctrl = $controller('UsersListCtrl',{$users:users,$state: $state})

    expect(ctrl.users.length).toEqual(2);
    ctrl.loadMoreUsers();
    expect(ctrl.usersCount).toEqual(10);
  }));



});
