const chai = require('chai');
const expect = require('chai').expect;
const http_mocks = require('node-mocks-http');
const Controller = require('./');

// Mock Model
const mongoose = require('mongoose');
const schema = mongoose.Schema({ foo: String });
const controller = new Controller(mongoose.model('TestModel', schema));

// Database Connection
const Database = require('../db');
let db = new Database('test');

describe('Controller', () => {

    let mockData = { foo: 'bar' };
    let res, req, _id;

    before(() => {
        db.connect();
    });

    after(() => {
        db.dropAndDisconnect();
    });

    beforeEach(() => {
        res = http_mocks.createResponse({
            eventEmitter: require('events').EventEmitter
        })
    });


    // Index
    it('#index', (done) => {
        req = http_mocks.createRequest({
            method: 'GET'
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data).to.be.a('array');
            done();
        });

        controller.index(req, res);

    });


    // Create
    it('#create', (done) => {

        req = http_mocks.createRequest({
            method: 'POST',
            body: mockData
        });

        res.on('end', () => {
            let data = JSON.parse(res._getData());
            _id = data._id;
            expect(data.foo).to.equal(mockData.foo);
            done();
        });

        controller.create(req, res);

    });


    // Show
    it('#show', (done) => {

        req = http_mocks.createRequest({
            method: 'GET',
            params: { id: _id }
        });


        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.foo).to.equal(mockData.foo);
            done();
        });

        controller.show(req, res);
    });


    // Update
    it('#update', (done) => {
        mockData.foo = 'bar2'; // make a change

         req = http_mocks.createRequest({
            method: 'PUT',
            params: { id: _id },
            body: mockData
        });


        res.on('end', () => {
            let data = JSON.parse(res._getData());
            expect(data.foo).to.equal(mockData.foo);
            done();
        });

        controller.update(req, res);
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

        controller.delete(req, res);
    });


});
