

describe('UsersListController', function () {
  var controller;
  

  beforeEach(module('ui.router'));
  beforeEach(module('UsersListCtrl'));
  beforeEach(module(function($provide){
    $provide.value('users',{data:[{name:"ahmed"},{name:"wael"}]});
  }));

  

//ToDo separate every test in separate it() block

  it('Users must load before controller instantiation', inject(function ($controller,users,$state) {
    //verify if go method is called by $state
    spyOn($state, 'go');
    expect($state.go).toBeDefined;
    var ctrl = $controller('UsersListCtrl',{$users:users,$state: $state})

    //users instatiated
    expect(ctrl.users.length).toEqual(2);
    ctrl.loadMoreUsers();

    //usersCount is incremented by 5
    expect(ctrl.usersCount).toEqual(10);
  }));



});
