//ToDO mockup http requests to write the unit test

describe('UsersService', function () {
    var $httpBackend, requestHandler, usersService;
    beforeEach(module('UsersService'));
    beforeEach(inject(function ($injector, UsersService) {
        $httpBackend = $injector.get('$httpBackend');
        //mock data in get function
        requestHandler = $httpBackend.when('GET', 'https://api.github.com/users').
            respond([{ name: 'foo' }, { name: 'bar' }]
            )
        requestHandler2 = $httpBackend.when('GET', 'https://api.github.com/users/foo')
            .respond(
                ({login:'foo', name:'bar'})
            )    
        usersService = UsersService;
    }))

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should get 2 users', function () {
        expect(usersService).toBeDefined();
        expect(usersService.getAllUsers).toBeDefined();
        expect(typeof usersService.getAllUsers).toEqual('function');
        $httpBackend.expectGET('https://api.github.com/users');

        usersService.getAllUsers().then(function (res) {
            expect(res.data.length).toEqual(2);
            expect(res.data[0].name).toEqual('foo');
        });

        $httpBackend.flush();

    })

    it('should get  user by login ', function () {
        var login = "foo";
        $httpBackend.expectGET('https://api.github.com/users/' + login);
        usersService.getUserByLogin(login).then(function(res){
            expect(res.data.login).toEqual('foo')
            expect(res.data.name).toEqual('bar')
        })
        $httpBackend.flush();
    })
})