const http_mocks = require('node-mocks-http');
const controller = require('../../../../app/controllers/users');
const User = require('../../../../app/models/user');

describe('UserController', () => {
    let _uniqueId = 0;
    let res, req, user;


    beforeEach((done) => {
        res = http_mocks.createResponse({
            eventEmitter: require('events').EventEmitter
        });

        user = new User({
            username: 'testuser-' + (_uniqueId++), // get unique username
            password: 'Password123'
        });

        user.save(done);
    });


    // Index
    it('#index', (done) => {
        req = http_mocks.createRequest({
            method: 'GET'
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.length > 0).to.be.equal(true);
            done();
        });

        controller.index(req, res);
    });

    // Create
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
            let data = JSON.parse(res._getData());
            expect(data).to.be.a('Object');
            done();
        });

        controller.create(req, res);
    });

    // Show
    it('#show', (done) => {
        req = http_mocks.createRequest({
            method: 'GET',
            params: {
                id: user._id
            }
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data._id).to.be.equal(req.params.id.toString());
            done();
        });

        controller.show(req, res);
    });

    // Update
    it('#update', (done) => {
        req = http_mocks.createRequest({
            method: 'PUT',
            params: {
                id: user._id
            },
            body: {
                user: {
                    username: 'username-updated',
                }
            }
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.username).to.be.equal(req.body.user.username);
            done();
        });

        controller.update(req, res);
    });

    // Delete
    it('#show', (done) => {
        req = http_mocks.createRequest({
            method: 'DELETE',
            params: {
                id: user._id
            }
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data).to.be.equal(true);
            done();
        });

        controller.delete(req, res);
    });


});
