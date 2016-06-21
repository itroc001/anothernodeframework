const chai = require('chai');
const expect = require('chai').expect;
const http_mocks = require('node-mocks-http');
const PostController = require('./');


describe('PostController', () => {

    let res, req, _id;

    beforeEach(() => {
        res = http_mocks.createResponse({
            eventEmitter: require('events').EventEmitter
        })
    });


    it('#index', (done) => {
        req = http_mocks.createRequest({
            method: 'GET'
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data).to.be.a('array');
            done();
        });

        PostController.index(req, res);

    });

    it('#create', (done) => {
        mockPost = {
            title: 'Foo',
            content: 'Bar'
        };

        req = http_mocks.createRequest({
            method: 'POST',
            body: mockPost
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            _id = data._id;
            expect(data.title).to.equal('Foo');
            done();
        });

        PostController.create(req, res);

    });

    it('#show', (done) => {

        req = http_mocks.createRequest({
            method: 'GET',
            params: { id: _id }
        });


        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.title).to.equal('Foo');
            done();
        });

        PostController.show(req, res);
    });

    it('#update', (done) => {
         req = http_mocks.createRequest({
            method: 'PUT',
            params: { id: _id },
            body: {
                title: 'Foo - Updated'
            }
        });


        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.title).to.equal('Foo - Updated');
            done();
        });

        PostController.update(req, res);
    });


    it('#delete', (done) => {
        req = http_mocks.createRequest({
            method: 'DELETE',
            params: { id: _id }
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.success).to.equal(true);
            done();
        });

        PostController.delete(req, res);
    });


});
