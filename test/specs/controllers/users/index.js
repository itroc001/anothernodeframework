const http_mocks = require('node-mocks-http');
const controller = require('../../../../app/controllers/users');

describe('UserController', () => {
    let res, req, user;

    beforeEach(() => {
        res = http_mocks.createResponse({
            eventEmitter: require('events').EventEmitter
        });
    });


    // Index
    it('#index', (done) => {
        req = http_mocks.createRequest({
            method: 'GET'
        });

        res.on('end', () => {
            expect(res._isJSON()).to.be.equal(true);
            expect(res._getStatusCode()).to.be.equal(200);
            expect(res._getRenderView()).to.be.equal('users/index');
            expect(res._getRenderData()).to.have.property('data');
            expect(res._getRenderData()).to.have.property('error');
            done();
        });

        controller.index(req, res);
    });

    // // Create
    it('#create', (done) => {

        req = http_mocks.createRequest({
            method: 'POST',
            body: {
                user: {
                    username: 'username-created',
                    password: 'Password123'
                }
            }
        });

        res.on('end', () => {
            expect(res._isJSON()).to.be.equal(true);
            expect(res._getStatusCode()).to.be.equal(200);
            expect(res._getRenderView()).to.be.equal('users/create');
            expect(res._getRenderData()).to.have.property('data');
            expect(res._getRenderData()).to.have.property('error');
            done();
        });

        controller.create(req, res);
    });

    // Show
    it('#show', (done) => {
        req = http_mocks.createRequest({
            method: 'GET',
            params: {
                id: 123
            }
        });

        res.on('end', () => {
            expect(res._isJSON()).to.be.equal(true);
            expect(res._getStatusCode()).to.be.equal(200);
            expect(res._getRenderView()).to.be.equal('users/show');
            expect(res._getRenderData()).to.have.property('data');
            expect(res._getRenderData()).to.have.property('error');
            done();
        });

        controller.show(req, res);
    });

    // Update
    it('#update', (done) => {
        req = http_mocks.createRequest({
            method: 'PUT',
            params: {
                id: 123
            },
            body: {
                user: {
                    username: 'username-updated',
                }
            }
        });

        res.on('end', () => {
            expect(res._isJSON()).to.be.equal(true);
            expect(res._getStatusCode()).to.be.equal(200);
            expect(res._getRenderView()).to.be.equal('users/update');
            expect(res._getRenderData()).to.have.property('data');
            expect(res._getRenderData()).to.have.property('error');
            done();
        });

        controller.update(req, res);
    });

    // Delete
    it('#delete', (done) => {
        req = http_mocks.createRequest({
            method: 'DELETE',
            params: {
                id: 123
            }
        });

        res.on('end', () => {
            expect(res._isJSON()).to.be.equal(true);
            expect(res._getStatusCode()).to.be.equal(200);
            expect(res._getRenderView()).to.be.equal('users/delete');
            expect(res._getRenderData()).to.have.property('data');
            expect(res._getRenderData()).to.have.property('error');
            done();
        });

        controller.delete(req, res);
    });


});
