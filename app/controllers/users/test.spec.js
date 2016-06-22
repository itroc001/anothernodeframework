
const chai = require('chai');
const expect = require('chai').expect;
const http_mocks = require('node-mocks-http');
const Controller = require('./');

// Model
const User = require('../../models/user');

// Database Connection
const Database = require('../../lib/db');
const mockData = new User({ username: 'admin', password: 'password' });

describe('Controller', () => {

    let db = new Database('test');
    let res, req;

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
        // req = http_mocks.createRequest({
        //     method: 'GET'
        // });

        // res.on('end', () => {
        //     let data = JSON.parse(res._getData());
        //     expect(data).to.be.a('array');
        //     done();
        // });

        // controller.index(req, res);
        expect(true).to.be.equal(false);

    });




});
