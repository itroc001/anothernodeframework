const chai = require('chai');
const expect = require('chai').expect;
const BaseController = require('./');

// Mock Model
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    foo: String
});
const Model = mongoose.model('TestModel', schema);

// Mock Controller
const controller = new BaseController(Model);

describe('BaseController', () => {

    let mockData = {};
    let res = {};
    let req = {};
    let model;

    beforeEach((done) => {
        mockData.foo = 'bar';
        model = new Model(mockData);
        model.save(done);
    });


    // Index
    it('#index', (done) => {
        controller.index((err, doc) => {
            expect(doc.length).to.be.equal(1);
            done();
        });
    });


    // Create
    it('#create', (done) => {
        controller.create(mockData, (err, doc) => {
            expect(doc.foo).to.be.equal(mockData.foo);
            done();
        });
    });


    // Show
    it('#show', (done) => {
        controller.show({
            _id: model._id
        }, (err, doc) => {
            expect(doc.foo).to.be.equal(mockData.foo);
            done();
        });
    });


    // Update
    it('#update', (done) => {
        mockData.foo = 'updated';
        controller.update({
            _id: model._id
        }, mockData, (err, doc) => {
            expect(doc.foo).to.be.equal(mockData.foo);
            done();
        });
    });

    it('#delete', (done) => {
        controller.delete({
            _id: model._id
        }, (err, doc) => {
            expect(doc).to.be.equal(true);
            done();
        });
    });


});
