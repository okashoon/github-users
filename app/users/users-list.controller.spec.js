

describe('UsersListController', function () {
  var $state, users, ctrl;


  beforeEach(module('ui.router'));
  beforeEach(module('UsersListCtrl'));
  beforeEach(module(function ($provide) {
    //mock users
    $provide.value('users', { data: [{ name: "ahmed" }, { name: "wael" }] });
  }));

  beforeEach(inject(function ($state, $controller) {
    //mock $state
    $state = {
      go: function () {
        return true;
      }
    }

    //instatiate controller with mock users and mock $state
    ctrl = $controller('UsersListCtrl', { $users: users, $state: $state })

  }))


  it('Users must load before controller instantiation', function () {

    expect(ctrl.users.length).toEqual(2);

  });

  it('loadMoreUsers increment usersCount by 5', function () {

    ctrl.loadMoreUsers();
    expect(ctrl.usersCount).toEqual(10);

  })



});
