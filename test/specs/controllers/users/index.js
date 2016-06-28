const httpMocks = require('node-mocks-http');
const UserController = require('../../../../app/controllers/users');

describe('UserController', () => {
    let userController = new UserController();
    let res;
    let req;
    let test;

    test = (_method) => {
        beforeEach(() => {
            res = httpMocks.createResponse();
            req = httpMocks.createRequest();

            sinon.spy(userController._controller, _method);

            userController[_method](req, res);
        });

        afterEach(() => {
            userController._controller[_method].restore();
        });

        it('calls controller method', () => {
            expect(userController._controller[_method]).to.have.been.calledOnce;
        });

    };

    describe('#index', () => test('index'));
    describe('#create', () => test('create'));
    describe('#show', () => test('show'));
    describe('#update', () => test('update'));
    describe('#delete', () => test('delete'));


});
